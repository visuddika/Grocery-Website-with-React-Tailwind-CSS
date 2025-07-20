import React from 'react';
import CategoryPage from '../CategoryPage/CategoryPage';
import BgSeaFood from '../../assets/Meat & Seafood1.jpeg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFood" bgImage={ BgSeaFood} categories={['Meat','Seafood']} />
    </div>
  );
}

export default SeaFood;
