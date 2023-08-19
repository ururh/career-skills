import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { BlueSpan, ButtonLearnMore, ButtonLike, DivMain, Img, InfoSpan, TextSpan } from './AutoElem.styled';
import Modal from '../Modal/Modal';

const AutoElem = ({ car }) => {
    
    const { id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address, mileage } = car;

    const location = address.substring(address.indexOf(',') + 1, address.length).split(',');
    const prettifiedMileage = String(mileage).slice(0, 1) + ',' + String(mileage).slice(1);

    const info = [location[0].trim(), location[1].trim(), 
        rentalCompany, type, prettifiedMileage, id, functionalities[0]];

  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some((item) => item.id === id);
    setIsLiked(isFavorite);
  }, [id]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


    const isFavorite = favorites.some((item) => item.id === id);


    if (isFavorite) {
      const updatedFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {

      const updatedFavorites = [...favorites, car];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <li>
      <div style={{ position: 'relative' }}>
        <Img src={img} alt={make} />
        <ButtonLike
          type='button'
          onClick={handleLikeClick}
        isliked={isLiked ? 'true' : 'false'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill={isLiked ? '#3470FF' : 'none'}>
<path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" stroke={isLiked ? '#3470FF' : 'white'} strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </ButtonLike>
      </div>
      <DivMain>
        <TextSpan>
          {make}
          <BlueSpan> {model}</BlueSpan>, {year}
        </TextSpan>
        <TextSpan>{rentalPrice}</TextSpan>
      </DivMain>
      <ul>
        {info?.map((el) => (
          <InfoSpan key={uuidv4()}>{el}</InfoSpan>
        ))}
      </ul>
      <ButtonLearnMore type='button' onClick={openModal}>
        Learn more
      </ButtonLearnMore>
      {showModal && <Modal onClose={closeModal} car={car} />}
    </li>
  );
};

AutoElem.propTypes = {
  car: PropTypes.object.isRequired
};

export default AutoElem;
