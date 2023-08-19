import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AutoList from '../components/AutoList/AutoList';
import Filter from '../components/Filter/Filter';

const Catalog = ({ carsList }) => {
  const [filteredCars, setFilteredCars] = useState(carsList);
  const [makeFilter, setMakeFilter] = useState('');
  const [rentalPriceFilter, setRentalPriceFilter] = useState('');
  const [mileageFilter, setMileageFilter] = useState({ from: '', to: '' });
  const [searchClicked, setSearchClicked] = useState(false);

  useMemo(() => {
    let filteredCarsList = carsList;

    if (searchClicked) {
      if (makeFilter) {
        filteredCarsList = filteredCarsList.filter(car => car.make === makeFilter);
      }

      if (rentalPriceFilter) {
        filteredCarsList = filteredCarsList.filter(car => car.rentalPrice === rentalPriceFilter);
      }

      if (mileageFilter.from !== '' && mileageFilter.to !== '') {
        filteredCarsList = filteredCarsList.filter(
          car => car.mileage >= Number(mileageFilter.from) && car.mileage <= Number(mileageFilter.to)
        );
      }
    }

    setFilteredCars(filteredCarsList);
  }, [carsList, makeFilter, rentalPriceFilter, mileageFilter, searchClicked]);

  const handleSearchClick = (selectedMake, selectedRentalPrice, selectedMileageRange) => {
    setMakeFilter(selectedMake);
    setRentalPriceFilter(selectedRentalPrice);
    setMileageFilter(selectedMileageRange);
    setSearchClicked(true);
  };

  return (
    <>
      <Filter
        carsList={carsList}
        onSearchClick={handleSearchClick}
      />
      <AutoList carsList={filteredCars} />
    </>
  );
};

Catalog.propTypes = {
  carsList: PropTypes.array.isRequired
};

export default Catalog;
