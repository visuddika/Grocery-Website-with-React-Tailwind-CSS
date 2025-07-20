import React, { useEffect, useState } from "react";
import { RiHeartPulseFill, RiHeartLine } from "react-icons/ri";
import { SiShopify } from "react-icons/si";
import { FaSearch, FaUser, FaBell, FaEye, FaEyeSlash } from "react-icons/fa";
import { TbMenu2, TbX } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [favoriteCount, setFavoriteCount] = useState(7);
  
  // Auth states
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    rememberMe: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (authMode === 'signup') {
      if (!formData.name) {
        errors.name = 'Name is required';
      }
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }
    
    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        if (authMode === 'login') {
          // Mock login
          setUser({ name: 'John Doe', email: formData.email });
          setIsLoggedIn(true);
        } else {
          // Mock signup
          setUser({ name: formData.name, email: formData.email });
          setIsLoggedIn(true);
        }
        setShowAuthModal(false);
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          rememberMe: false
        });
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowUserMenu(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
      if (!e.target.closest('.notification-container')) {
        setShowNotifications(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const notifications = [
    { id: 1, text: "New order received", time: "2 min ago", unread: true },
    { id: 2, text: "Product back in stock", time: "1 hour ago", unread: true },
    { id: 3, text: "Weekly sale starts now", time: "3 hours ago", unread: false },
  ];

  return (
    <>
      <header
        className={`bg-white/80 backdrop-blur-xl fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg border-b border-gray-100" : ""
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex justify-between items-center">
          {/* Logo with animation */}
          <a href="#" className="text-2xl lg:text-3xl font-bold group">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Gr
            </span>
            <span className="text-red-600 uppercase transform group-hover:scale-110 transition-transform duration-200 inline-block">
              o
            </span>
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              cify
            </span>
          </a>

          {/* Desktop Menu with hover effects */}
          <ul className="lg:flex items-center gap-x-8 xl:gap-x-12 hidden">
            {["Home", "About Us", "Process", "Contact"].map((item, index) => (
              <li key={item} className="relative group">
                <a 
                  href="#" 
                  className={`font-semibold tracking-wider transition-all duration-300 relative ${
                    index === 0 
                      ? "text-orange-500" 
                      : "text-zinc-800 hover:text-orange-500"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Enhanced Nav Actions */}
          <div className="flex items-center gap-x-3 lg:gap-x-5">
            {/* Enhanced Search */}
            <div className={`lg:flex items-center border-2 rounded-full transition-all duration-300 hidden ${
              searchFocused 
                ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-white" 
                : "border-gray-200 hover:border-orange-300"
            }`}>
              <input
                type="text"
                placeholder="Search products..."
                autoComplete="off"
                className="flex-1 h-12 px-4 focus:outline-none bg-transparent text-sm"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-sm hover:from-orange-600 hover:to-red-700 transition-all duration-200 mx-1">
                <FaSearch />
              </button>
            </div>

            {/* Notifications */}
            <div className="notification-container relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-zinc-700 hover:text-orange-500 transition-colors duration-200 relative"
              >
                <FaBell className="text-xl" />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                  </div>
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                        notification.unread ? "bg-blue-50" : ""
                      }`}
                    >
                      <p className="text-sm text-gray-800">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button className="text-sm text-orange-500 hover:text-orange-600">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Favorites with count */}
            <button className="text-zinc-700 hover:text-red-500 transition-colors duration-200 relative group">
              <RiHeartLine className="text-xl group-hover:hidden" />
              <RiHeartPulseFill className="text-xl hidden group-hover:block" />
              {favoriteCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Cart with count and animation */}
            <button className="text-zinc-700 hover:text-orange-500 transition-colors duration-200 relative group">
              <HiShoppingBag className="text-xl group-hover:scale-110 transition-transform duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            {isLoggedIn ? (
              <div className="user-menu-container relative hidden lg:block">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-zinc-700 hover:text-orange-500 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm font-medium">{user?.name || 'User'}</span>
                  <IoChevronDown className={`text-sm transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Orders</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                    <hr className="my-2" />
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setShowAuthModal(true);
                  }}
                  className="text-zinc-700 hover:text-orange-500 font-medium transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuthModal(true);
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Enhanced Hamburger */}
            <button
              onClick={toggleMenu}
              className="text-zinc-800 hover:text-orange-500 text-2xl lg:hidden transition-colors duration-200"
            >
              {showMenu ? <TbX /> : <TbMenu2 />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 transition-all duration-500 ${
              showMenu ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            }`}
          >
            <div className="p-6 space-y-6">
              {/* Mobile Search */}
              <div className="flex items-center border-2 border-orange-500 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  autoComplete="off"
                  className="flex-1 h-12 px-4 focus:outline-none bg-transparent"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white w-12 h-12 flex justify-center items-center">
                  <FaSearch />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="space-y-4">
                {["Home", "About Us", "Process", "Contact"].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`block font-semibold tracking-wider transition-colors duration-200 ${
                      index === 0 
                        ? "text-orange-500" 
                        : "text-zinc-800 hover:text-orange-500"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Mobile Auth Section */}
              {!isLoggedIn && (
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button
                    onClick={() => {
                      setAuthMode('login');
                      setShowAuthModal(true);
                      setShowMenu(false);
                    }}
                    className="w-full text-left font-medium text-zinc-800 hover:text-orange-500 transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setShowAuthModal(true);
                      setShowMenu(false);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Mobile User Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {isLoggedIn && (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user?.name}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-zinc-700">
                      <RiHeartLine className="text-lg" />
                      <span className="text-sm">Favorites ({favoriteCount})</span>
                    </button>
                    <button className="flex items-center gap-2 text-zinc-700">
                      <HiShoppingBag className="text-lg" />
                      <span className="text-sm">Cart ({cartCount})</span>
                    </button>
                  </div>
                </div>

                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 font-medium hover:text-red-700 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">
                {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <TbX className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      formErrors.name 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 focus:ring-orange-500/20 focus:border-orange-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                    formErrors.email 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-gray-300 focus:ring-orange-500/20 focus:border-orange-500'
                  }`}
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full h-12 px-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      formErrors.password 
                        ? 'border-red-500 focus:ring-red-500/20' 
                        : 'border-gray-300 focus:ring-orange-500/20 focus:border-orange-500'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {formErrors.password && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                )}
              </div>

              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full h-12 px-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                        formErrors.confirmPassword 
                          ? 'border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-300 focus:ring-orange-500/20 focus:border-orange-500'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {formErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
                  )}
                </div>
              )}

              {authMode === 'login' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {authMode === 'login' ? 'Signing in...' : 'Creating account...'}
                  </div>
                ) : (
                  authMode === 'login' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-600">
                {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => {
                    setAuthMode(authMode === 'login' ? 'signup' : 'login');
                    setFormErrors({});
                    setFormData({
                      email: '',
                      password: '',
                      confirmPassword: '',
                      name: '',
                      rememberMe: false
                    });
                  }}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  {authMode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;