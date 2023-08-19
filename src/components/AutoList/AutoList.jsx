import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AutoElem from '../AutoElem/AutoElem';
import { AutoListContainer, ContainerCatalog } from './AutoList.styled';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';


const AutoList = ({ carsList }) => {
  const itemsPerPage = 8;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + itemsPerPage);
  };

  const renderedItems = carsList.slice(0, visibleItems);

  return (
    <ContainerCatalog>
      <AutoListContainer>
      {Boolean(renderedItems.length) ? (
        renderedItems.map(car => <AutoElem key={car.id} car={car} />)
      ) : (
        <h2>no cars</h2>
      )}
      </AutoListContainer>
      {visibleItems < carsList.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}</ContainerCatalog>
    
  );
};

AutoList.propTypes = {
  carsList: PropTypes.array.isRequired
};

export default AutoList;
