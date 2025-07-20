import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  const handleEmailSubmit = () => {
    if (email) {
      setShowPopup(true);
      setEmail('');
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <>
      <footer className='bg-gradient-to-br from-zinc-900 via-zinc-800 to-gray-900 py-20 relative overflow-hidden'>
        {/* Decorative Background Elements */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-20 w-24 h-24 bg-pink-500 rounded-full blur-2xl animate-pulse delay-1000'></div>
          <div className='absolute top-1/2 left-1/3 w-20 h-20 bg-purple-500 rounded-full blur-2xl animate-pulse delay-500'></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-16 right-1/4 w-4 h-4 bg-orange-400 rotate-45 animate-bounce opacity-20'></div>
          <div className='absolute bottom-32 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-30'></div>
          <div className='absolute top-1/3 right-16 w-2 h-2 bg-purple-400 animate-pulse opacity-25'></div>
        </div>

        <div className='max-w-6xl mx-auto px-6 relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-white'>
            
            {/* Enhanced Brand Section */}
            <div className='space-y-6 group'>
              <div className='flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300'>
                <div className='relative'>
                  <span className='text-3xl font-bold text-orange-500 drop-shadow-lg'>Gr</span>
                  <div className='absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping'></div>
                </div>
                <span className='text-3xl font-bold text-white drop-shadow-lg'>Ocify</span>
              </div>
              
              <div className='bg-gradient-to-r from-zinc-800 to-zinc-700 p-4 rounded-lg border border-zinc-600 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20'>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  Brief for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
              </div>
              
              <div className='flex items-center space-x-2 text-gray-400 text-base'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                <span>2025 © All Right Reserved</span>
              </div>
            </div>

            {/* Enhanced Company Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'>
                Company
              </h3>
              <div className='space-y-4'>
                <div className='group cursor-pointer transform hover:translate-x-2 transition-all duration-300'>
                  <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors text-sm no-underline'>
                    <div className='w-1 h-1 bg-orange-500 rounded-full group-hover:w-2 transition-all duration-300'></div>
                    <span>About</span>
                  </a>
                </div>
                <div className='group cursor-pointer transform hover:translate-x-2 transition-all duration-300'>
                  <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-orange-500 transition-colors text-sm no-underline'>
                    <div className='w-1 h-1 bg-orange-500 rounded-full group-hover:w-2 transition-all duration-300'></div>
                    <span>FAQ's</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Support Section */}
            <div className='space-y-6'>
              <h3 className='text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
                Support
              </h3>
              <div className='space-y-4'>
                <div className='group cursor-pointer transform hover:translate-x-2 transition-all duration-300'>
                  <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition-colors text-sm no-underline'>
                    <div className='w-1 h-1 bg-pink-500 rounded-full group-hover:w-2 transition-all duration-300'></div>
                    <span>Support center</span>
                  </a>
                </div>
                <div className='group cursor-pointer transform hover:translate-x-2 transition-all duration-300'>
                  <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition-colors text-sm no-underline'>
                    <div className='w-1 h-1 bg-pink-500 rounded-full group-hover:w-2 transition-all duration-300'></div>
                    <span>Feedback</span>
                  </a>
                </div>
                <div className='group cursor-pointer transform hover:translate-x-2 transition-all duration-300'>
                  <a href="#" className='flex items-center space-x-2 text-gray-300 hover:text-pink-500 transition-colors text-sm no-underline'>
                    <div className='w-1 h-1 bg-pink-500 rounded-full group-hover:w-2 transition-all duration-300'></div>
                    <span>Contact us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stay Connected Section */}
            <div className='space-y-6'>
              <div className='bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-xl'>
                <h3 className='text-xl font-bold text-purple-400 mb-4'>
                  Stay Connected
                </h3>
                
                <p className='text-gray-300 text-sm mb-6 leading-relaxed'>
                  Questions or Feedback? we'd love to hear from you.
                </p>
                
                {/* Email Subscription */}
                <div className='space-y-4'>
                  <div className='flex rounded-lg overflow-hidden border-2 border-purple-500/30 focus-within:border-purple-500 transition-colors'>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter your email"
                      className='flex-1 px-4 py-3 bg-zinc-700 text-white placeholder-gray-400 focus:outline-none text-sm border-none'
                    />
                    <button
                      onClick={handleEmailSubmit}
                      className='px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center'
                    >
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Newsletter Preview Button */}
                  <button
                    onClick={() => setShowNewsletterModal(true)}
                    className='w-full py-3 px-4 text-sm text-purple-400 hover:text-purple-300 transition-colors border border-purple-500/50 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 flex items-center justify-center space-x-2'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                    <span>View Newsletter Preview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave at Bottom */}
        <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-blue-500 animate-pulse'></div>
      </footer>

      {/* Success Popup */}
      {showPopup && (
        <div className='fixed top-4 right-4 z-50 animate-slide-in'>
          <div className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-lg shadow-2xl border border-green-400 flex items-center space-x-3'>
            <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
              <svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
              </svg>
            </div>
            <div>
              <h4 className='font-semibold'>Success!</h4>
              <p className='text-sm opacity-90'>You've been subscribed to our newsletter!</p>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Modal */}
      {showNewsletterModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
          <div className='bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-600 rounded-2xl p-8 max-w-md mx-4 shadow-2xl transform animate-scale-in'>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto flex items-center justify-center'>
                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              
              <h3 className='text-2xl font-bold text-white'>Newsletter Preview</h3>
              <p className='text-gray-300 text-sm'>
                Get weekly updates about fresh products, exclusive deals, and health tips delivered to your inbox!
              </p>
              
              <div className='bg-zinc-800 p-4 rounded-lg text-left space-y-2 text-sm text-gray-300'>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-500'>✓</span>
                  <span>Fresh product arrivals</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-500'>✓</span>
                  <span>Exclusive member discounts</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-green-500'>✓</span>
                  <span>Health and nutrition tips</span>
                </div>
              </div>
              
              <button
                onClick={() => setShowNewsletterModal(false)}
                className='w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Footer;