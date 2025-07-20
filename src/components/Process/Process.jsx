import React, { useState } from "react";
import { 
  TbCircleNumber1Filled, 
  TbCircleNumber2Filled, 
  TbCircleNumber3Filled, 
  TbCircleNumber4Filled 
} from "react-icons/tb";
import { PiPlantFill, PiFactoryFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FaTruckFast } from "react-icons/fa6";
import { FaShoppingCart, FaPlus, FaMinus, FaTimes, FaTrashAlt } from "react-icons/fa";

const Heading = ({ highlight, heading }) => (
  <div className="relative">
    <h2 className="text-4xl font-bold text-gray-900 mb-2">
      <span className="text-orange-500">{highlight}</span> {heading}
    </h2>
    <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
  </div>
);

// Cart Popup Component
const CartPopup = ({ isOpen, onClose, cartItems, updateQuantity, removeItem, total }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-orange-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">Your Cart</h3>
            <span className="bg-orange-100 text-orange-600 text-sm font-medium px-2 py-1 rounded-full">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="text-gray-500 text-xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <FaShoppingCart className="text-gray-300 text-6xl mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm">Add some fresh products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">{item.name.charAt(0)}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-1 hover:bg-white rounded-full transition-colors"
                    >
                      <FaMinus className="text-gray-500 text-sm" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded-full transition-colors"
                    >
                      <FaPlus className="text-gray-500 text-sm" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors mt-1"
                    >
                      <FaTrashAlt className="text-sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-orange-500">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled className="text-orange-500 text-4xl drop-shadow-sm" />,
    title: "Sourcing",
    para: "We carefully source fresh products from trusted farmers and vendors, ensuring sustainable and ethical practices.",
    icon: <PiPlantFill className="text-green-600 text-5xl" />,
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled className="text-orange-500 text-4xl drop-shadow-sm" />,
    title: "Manufacturing",
    para: "Our state-of-the-art facilities follow strict hygiene standards and quality protocols to ensure product safety.",
    icon: <PiFactoryFill className="text-gray-700 text-5xl" />,
    bgGradient: "from-gray-50 to-slate-50",
    borderColor: "border-gray-200",
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled className="text-orange-500 text-4xl drop-shadow-sm" />,
    title: "Quality Control",
    para: "Every item undergoes rigorous inspection and testing for quality assurance before it reaches your basket.",
    icon: <SlBadge className="text-blue-500 text-5xl" />,
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled className="text-orange-500 text-4xl drop-shadow-sm" />,
    title: "Logistics",
    para: "Fast and reliable delivery network ensures your orders reach your doorstep — always fresh, always on time.",
    icon: <FaTruckFast className="text-orange-600 text-5xl" />,
    bgGradient: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
  },
];

const Process = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Fresh Apples", price: 3.99, quantity: 2 },
    { id: 2, name: "Organic Bananas", price: 2.49, quantity: 1 },
    { id: 3, name: "Premium Oranges", price: 4.99, quantity: 3 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setCartItems(items => items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
      {/* Cart Button */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed top-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <FaShoppingCart className="text-2xl" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <div className="text-center mb-19">
          <Heading highlight="Our" heading="Process" />
          <p className="text-gray-800 text-lg mt-4 max-w-2xl mx-auto text-bold">
            Discover how we ensure excellence at every step of our journey, from sourcing to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${item.borderColor} group relative overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              
              <div className="flex items-center justify-between mb-6">
                {item.number}
                <div className="w-8 h-0.5 bg-orange-300 rounded-full opacity-60"></div>
              </div>

              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <div className="bg-white p-6 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110 border border-gray-100">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.para}
                </p>
              </div>

              {/* Process flow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {steps.map((step, index) => (
                <div key={index} className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white animate-pulse" style={{ animationDelay: `${index * 300}ms` }}></div>
              ))}
            </div>
            <span className="text-gray-700 font-medium">Seamless Process, Outstanding Results</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Process;