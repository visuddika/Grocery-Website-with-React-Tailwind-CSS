import React, { useState, useEffect } from 'react'
import Grocery from '../../assets/Grocery.png'
import Grocery2 from '../../assets/Grocery2.png'
import Grocery3 from '../../assets/Grocery3.png'
import Grocery4 from '../../assets/Grocery4.png'
import Grocery6 from '../../assets/Grocery6.png'

import Button from '../Button/Button'


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Your 3 images array
  const images = [ Grocery4,Grocery3, Grocery2,Grocery6];

  // Auto change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-35 min-h-screen">
        {/* Hero Content */}
        <div className="flex-1 pr-10">
          <span className="bg-orange-100 text-orange-500 text-sm px-5 py-2 rounded-full inline-block">
            Export Best Quality....
          </span>
          <h1 className="md:text-6xl lg:text-7xl text-5xl/14 font-bold mt-6 leading-tight">
            Tasty Organic{' '}
            <span className="text-orange-500">Fruits</span>{' '}
            &{' '}
            <span className="text-orange-500">Veggies</span>
            <br />
            In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-6 mb-10 leading-relaxed">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>

        {/* Hero Image Container with Auto-Changing Carousel */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-4xl">
            {/* Main Image with Smooth Transition */}
            <img
              src={images[currentImageIndex]}
              alt="Fresh Organic Fruits and Vegetables"
              className="w-full h-auto object-contain transition-opacity duration-500 ease-in-out scale-110"
            />
            
            {/* Dot Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero