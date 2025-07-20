import React, { useState, useRef } from 'react';
import Heading from '../Heading/Heading';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonialData = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Food Blogger",
      rating: 5,
      image: "https://images.unsplash.com/photo-1613155663502-1a0d0129af90?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
      location: "New York",
      verified: true
    },
    {
      id: 2,
      name: "David Smith",
      role: "Chef",
      rating: 4,
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommend!",
      location: "Los Angeles",
      verified: true
    },
    {
      id: 3,
      name: "Alya Zahra",
      role: "Model",
      rating: 5,
      image: "https://media.istockphoto.com/id/1458913548/photo/cool-young-girl-in-autumn-coat-illuminated-by-neon-lights-at-night.jpg?s=2048x2048&w=is&k=20&c=ccqbafCqhAu28KYmHmdVsIpEA31P6Y4SRfca5OpkcvU=",
      review: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
      location: "Miami",
      verified: true
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Tech Manager",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1661306554721-36f375f05302?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Working from home with two kids, FreshBasket is a lifesaver! Same-day delivery, amazing app interface, and my family loves the fresh organic selection. 10/10!",
      location: "San Francisco",
      verified: true
    },
    {
      id: 5,
      name: "Sarah Williams",
      role: "Nutritionist",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "As a nutritionist, I'm picky about food quality. FreshBasket exceeds expectations! Premium organic options, detailed nutritional info, and eco-friendly packaging. Perfect!",
      location: "Chicago",
      verified: true
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth + 24; // card width + gap
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth + 24; // card width + gap
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      
      setCurrentIndex((prev) => Math.min(testimonialData.length - 1, prev + 1));
    }
  };

  const goToSlide = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth + 24;
      container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className='max-w-[1400px] px-10 mx-auto'>
        <div className="text-center mb-16">
          <Heading highlight="Customer" heading="Saying"/>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their grocery shopping experience with FreshBasket
          </p>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        {/* Navigation Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-green-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white border border-gray-200"
          >
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            disabled={currentIndex >= testimonialData.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-green-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white border border-gray-200"
          >
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialData.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group flex-shrink-0 w-80 md:w-96"
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-green-100 group-hover:ring-green-300 transition-all duration-300"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {testimonial.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-xs text-gray-500">Verified Purchase</span>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                  <button className="flex items-center gap-1 hover:text-green-600 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Helpful
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share
                  </button>
                  <span>2 days ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-green-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;