import React from 'react';
import { ModalOverlay, ModalContent, CloseButton, ImgModal, TextModal, BlueModal, Info, Description, SpanModal, UlSomeInfo, UlFirstInfo, KeySpan, LinkRental } from './Modal.styled';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({ onClose, car }) => {
  const { id, year, make, model, type, fuelConsumption, engineSize, img, description, accessories, functionalities, rentalPrice, address, rentalConditions, mileage } = car;

  const location = address.substring(address.indexOf(',') + 1, address.length).split(',');
  const prettifiedMileage = String(mileage).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");

  const info = [
    location[0].trim(),
    location[1].trim(),
    `id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`
  ];

  const conditions = [
    ...rentalConditions.split('\n'),
    `Mileage: ${prettifiedMileage}`,
    `Price: ${rentalPrice}`
  ];

  const renderListItems = (items) => {
    return items.map(item => (
      <Info key={uuidv4()}>{item}</Info>
    ));
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImgModal
          src={img}
          alt={model}
        />
        <div>
          <TextModal>{make} <BlueModal> {model}</BlueModal>, {year}</TextModal>
        </div>
        <UlFirstInfo>{renderListItems(info)}</UlFirstInfo>
        <Description>{description}</Description>
        <SpanModal>Accessories and functionalities:</SpanModal>
        <UlSomeInfo>{renderListItems(accessories.concat(functionalities))}</UlSomeInfo>
        <SpanModal>Rental conditions:</SpanModal>
        <UlFirstInfo>
          {conditions.map(item => {
            if (item.match('Minimum age:') || item.match('Mileage:') || item.match('Price:')) {
              const [key, value] = item.split(':');
              return (
                <KeySpan key={uuidv4()}>
                  {key}:
                  <BlueModal>{value}</BlueModal>
                </KeySpan>
              );
            } else {
              return <KeySpan key={uuidv4()}>{item}</KeySpan>;
            }
          })}
        </UlFirstInfo>
        <LinkRental href='tel:+380730000000'>
         Rental car
        </LinkRental>
        <CloseButton onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18 6L6 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6L18 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg></CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
