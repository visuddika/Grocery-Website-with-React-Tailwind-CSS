import React from 'react';
import CategoryPage from '../CategoryPage/CategoryPage';
import BgAll from '../../assets/Main1.png';

const AllProducts = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={BgAll} />
    </div>
  );
};

export default AllProducts;
