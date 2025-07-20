// src/components/Products/Products.jsx
import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';
import ProductList from '../ProductList/ProductList';
import { Link } from 'react-router-dom';

const Products = () => {
  const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood'];
  const [activeTab, setActiveTab] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = ProductList.filter(product => {
    if (activeTab === 'All') return true;
    return product.category === activeTab;
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-10">
        {/* Section Heading */}
        <Heading highlight="Our" heading="Products" />

        {/* Category buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {Categories.map(category => (
            <button
              key={category}
              aria-pressed={activeTab === category}
              className={`px-5 py-2 text-lg rounded-lg cursor-pointer transition-all duration-200 ${
                activeTab === category
                  ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gird:cols-1 md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Cards
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-zinc-500">
              No products found in this category.
            </p>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-16 mx-auto w-fit">
          <Link
          to="/allproducts"
          className="px-7 py-2 bg-orange-500 text-white rounded transition-all duration-300 hover:bg-green-700 hover:shadow-md transform hover:scale-105"
        >
       View All
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
