import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Home = lazy(() => import('./Home'));
const Favorites = lazy(() => import('./Favorites'));
const Catalog = lazy(() => import('./Catalog'));

const AppRoutes = () => {

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
            element={<Catalog/>}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;