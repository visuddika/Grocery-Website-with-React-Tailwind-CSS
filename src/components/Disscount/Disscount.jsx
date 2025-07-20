import React from 'react';
import Button from '../Button/Button';
import FrshFruite2 from '../../assets/FrshFruite2.png';

const Discount = () => {
  return (
    <section
      className="bg-zinc-200 bg-no-repeat bg-right"
      style={{
        backgroundImage: `url(${FrshFruite2})`,
        backgroundSize: '29%', // increased image size
      }}
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row-col max-w-[1600px] mx-auto px-20 py-10">
        <span className="md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-[700px]">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
            First Order Discount
          </h3>
          <p className="text-zinc-600 my-6">
            Enjoy an <strong>exclusive first-order discount</strong> on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and <strong>quality guaranteed</strong>.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
