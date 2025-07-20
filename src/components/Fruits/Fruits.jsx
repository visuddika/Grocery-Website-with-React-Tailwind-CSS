import React from 'react';
import Category from '../Category/Category';
import CategoryPage from '../CategoryPage/CategoryPage';
import BgFruits from '../../assets/Fruits & Veggies3.webp'


const Fruits = () => {
  return (
    <div>
     <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  );
}

export default Fruits;
