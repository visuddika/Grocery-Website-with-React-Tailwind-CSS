import React from 'react';

import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Values from '../Values/Values';
import Products from '../Products/Products';
import Disscount from '../Disscount/Disscount';
import Process from '../Process/Process';
import Testimonials from '../Testimonials/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Disscount />
      <Process />
      <Testimonials />
    </div>
  );
}
