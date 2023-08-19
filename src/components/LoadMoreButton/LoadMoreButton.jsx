import React from 'react';
import { ButtonLoad } from './LoadMoreButton.styled';


const LoadMoreButton = ({ onClick }) => {
  return (
      <ButtonLoad type="button" onClick={onClick}>
        Load More
      </ButtonLoad>
  );
};

export default LoadMoreButton;
