import React from 'react';
import CategoryPage from '../CategoryPage/CategoryPage';
import BgDairy from '../../assets/Dairy & Eggs1.jpeg';

const Dairy = () => {
  return (
    <CategoryPage 
      title="Fresh Dairy & Farm Eggs" 
      subtitle="Premium Quality, Farm Fresh Daily"
      description="Discover our selection of organic dairy products and fresh eggs"
      bgImage={BgDairy} 
      categories="Dairy"
      showWelcomePopup={true}
      popupTitle="Welcome to Dairy Section!"
      popupMessage="Explore our fresh dairy products and organic eggs sourced from local farms."
    />
  );
};

export default Dairy;