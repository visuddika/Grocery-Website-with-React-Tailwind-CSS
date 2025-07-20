import React, { useState, useEffect } from "react";

// Cart icon (optional)
const CartIcon = () => (
  <svg
    className="w-6 h-6 text-orange-500 inline-block mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 4h14M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

// Button component
const Button = ({ children, content, className = "", ...props }) => (
  <button
    type="button"
    className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out ${className}`}
    {...props}
  >
    {children || content}
  </button>
);

// Card component
const Card = ({ image, name, price }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const addToCart = () => {
    setCartQuantity((prev) => prev + 1);
    setShowPopup(true);
  };

  const removeFromCart = () => {
    if (cartQuantity > 0) {
      setCartQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="relative bg-white p-5 rounded-xl shadow-lg max-w-sm mx-auto">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-4">
        <button
          type="button"
          aria-label="Add to favorites"
          className="text-3xl text-zinc-300 hover:text-red-400"
        >
          ♥
        </button>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          {cartQuantity > 0 && (
            <>
              <button
                onClick={removeFromCart}
                className="bg-red-500 hover:bg-red-600 text-white text-xl w-10 h-10 rounded-lg flex items-center justify-center"
              >
                −
              </button>
              <span className="w-12 h-10 flex items-center justify-center border border-orange-200 rounded-full font-semibold text-lg text-orange-600 bg-white shadow">
                {cartQuantity}
              </span>
            </>
          )}
          <Button className="w-10 h-10 text-xl flex items-center justify-center" onClick={addToCart}>
            +
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="max-h-full object-contain mx-auto drop-shadow-md"
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3 text-orange-600">
          Rs {price.toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center rounded-xl animate-fadeIn z-10">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-xs border border-orange-100">
            <p className="text-lg font-semibold text-orange-600 flex items-center justify-center gap-2">
              <CartIcon />
              Added to cart!
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Total: {cartQuantity} {cartQuantity === 1 ? "item" : "items"}
            </p>
            <p className="text-sm text-gray-800 mt-1 font-semibold">
              Total Price: Rs {(cartQuantity * price).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
