import React, { useState } from 'react';
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt, FaTimes } from "react-icons/fa";
import Basket from '../../assets/Full-Veg-basket.png';

const Values = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const Value = [
    {
      id: 1,
      title: 'Trust',
      para: 'It is a long established fact that a reader will be distracted by the readable.',
      icon: <FaHeart />,
      detailedInfo: 'Trust is the foundation of our relationship with customers. We believe in transparency, honest communication, and delivering on our promises. Every product we offer goes through rigorous quality checks to ensure you receive exactly what you expect.',
      image: 'https://media.istockphoto.com/id/1372787942/photo/happy-mature-man-farmer-standing-in-greenhouse-holding-basket-of-freshly-harvested.jpg?s=2048x2048&w=is&k=20&c=5YqJrOz_Pn8qyBx4nJKu3RyVJMXE6wZUFG_L8s2oXyE='
    },
    {
      id: 2,
      title: 'Always Fresh',
      para: 'Always Fresh earns your trust with quality you can see and feel.',
      icon: <FaLeaf />,
      detailedInfo: 'Freshness is our commitment to you. We source directly from local farms, ensuring minimal time between harvest and delivery. Our cold chain management maintains optimal temperatures throughout the supply chain.',
      image: 'https://media.istockphoto.com/id/1435220822/photo/fresh-organic-vegetables-in-wicker-basket-in-the-garden.jpg?s=2048x2048&w=is&k=20&c=VnzRlMJy2k5G8rYqU8wX1mJz2Vz5LQjN7p4RxW2qEzU='
    },
    {
      id: 3,
      title: 'Food Safety',
      para: 'We ensure every bite meets the highest safety standards.',
      icon: <FaShieldAlt />,
      detailedInfo: 'Food safety is non-negotiable. We follow strict HACCP protocols, conduct regular testing, and maintain comprehensive traceability systems. Our facilities are certified and regularly audited by third-party agencies.',
      image: 'https://media.istockphoto.com/id/1388254128/photo/quality-control-inspector-checking-vegetables-in-food-processing-plant.jpg?s=2048x2048&w=is&k=20&c=9PqLrX3wV2mJ8fN5K7qR2z4x6L9qW5E2yT8pU3vZ1cA='
    },
    {
      id: 4,
      title: '100% Organic',
      para: 'We ensure every bite meets the highest safety standards.',
      icon: <FaSeedling />,
      detailedInfo: 'Our organic certification means no synthetic pesticides, herbicides, or fertilizers. We work with certified organic farms that practice sustainable agriculture, protecting both your health and the environment.',
      image: 'https://media.istockphoto.com/id/2216128187/photo/female-farmer-carrying-crate-with-vegetables.jpg?s=2048x2048&w=is&k=20&c=8bgTlruszz1ZnGjgUeAtekrFu8V_-SE5zEBgpuWB37o='
    }
  ];

  const openPopup = (value) => {
    setSelectedValue(value);
  };

  const closePopup = () => {
    setSelectedValue(null);
  };

  const ValueCard = ({ item, isLeft = false }) => (
    <div 
      className={`flex ${isLeft ? 'md:flex-row-reverse' : ''} items-center gap-7 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg group`}
      onClick={() => openPopup(item)}
    >
      <div className="relative">
        <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 rounded-full shadow-lg transform transition-transform duration-300 group-hover:rotate-12'>
          {item.icon}
        </span>
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className={isLeft ? 'md:text-right' : 'text-left'}>
        <h3 className='text-zinc-800 text-3xl font-bold group-hover:text-orange-500 transition-colors duration-300'>{item.title}</h3>
        <p className='text-zinc-600 mt-2 group-hover:text-zinc-700 transition-colors duration-300'>{item.para}</p>
        <span className='text-orange-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Click to learn more →
        </span>
      </div>
    </div>
  );

  const LeftValues = Value.slice(0, 2).map((item) => (
    <ValueCard key={item.id} item={item} isLeft={true} />
  ));

  const RightValues = Value.slice(2).map((item) => (
    <ValueCard key={item.id} item={item} isLeft={false} />
  ));

  return (
    <section className="relative">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className='max-w-[1400px] mx-auto px-10 py-20 relative'>
        {/* Heading component placeholder */}
        <div className="text-center mb-15">
          <h2 className="text-5xl font-bold text-zinc-900 ">
            
            Our <span className="text-orange-500">Values</span>
          </h2>
        </div>

        <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>
          <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
            {LeftValues}
          </div>
          <div className='w md:flex w-1/2 hidden relative'>
            <div className="relative group">
              <img 
                src={Basket} 
                alt="Fresh vegetables basket"
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
              />
              {/* Image decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/4 -right-6 w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
            {RightValues}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedValue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100 animate-in">
            {/* Close button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <FaTimes />
            </button>
            
            {/* Popup content */}
            <div className="p-6">
              {/* Image */}
              <div className="relative mb-6">
                <img 
                  src={selectedValue.image} 
                  alt={selectedValue.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-b from-orange-400 to-orange-500 text-white p-3 rounded-full text-2xl shadow-lg">
                  {selectedValue.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-zinc-800 mb-4 text-center">
                {selectedValue.title}
              </h3>
              
              {/* Detailed information */}
              <p className="text-zinc-600 text-lg leading-relaxed mb-6 text-center">
                {selectedValue.detailedInfo}
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              
              {/* Action button */}
              <div className="text-center">
                <button 
                  onClick={closePopup}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transform transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Values;