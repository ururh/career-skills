import React, { useEffect, useState } from 'react';
import AutoList from '../AutoList/AutoList';


const FavoritesCars = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <AutoList carsList={favorites} />
    </div>
  );
};

export default FavoritesCars;
