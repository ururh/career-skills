import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { getAdvertsCars } from '../services/api';

const Home = lazy(() => import('./Home'));
const Favorites = lazy(() => import('./Favorites'));
const Catalog = lazy(() => import('./Catalog'));

const AppRoutes = () => {

  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await getAdvertsCars();
      if (items) {
          setCarsList(items);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favorites"
            element={<Favorites/>}
          />
          <Route
            path="/catalog"
            element={<Catalog carsList={carsList}/>}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;