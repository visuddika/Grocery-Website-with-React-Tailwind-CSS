import React from "react";
import Heading from "../Heading/Heading";

// Image imports
import FruitsImg from "../../assets/FruitsImg.png";
import DairyImg from "../../assets/DairyImg.png";
import MeatImg from "../../assets/MeatImg.png";
import { Link } from "react-router-dom";
const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fruits & Veggies are fresh, natural foods packed with essential vitamins, minerals, and fiber. They support a healthy diet, boost immunity, and add flavor to your meals.",
    image: FruitsImg,
     path:'/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Dairy & Eggs provide essential nutrients like calcium and protein. Perfect for breakfast, baking, or cooking nutritious meals.",
    image: DairyImg,
    path:'/dairy'
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "Discover fresh meats and seafood—from beef and chicken to fish and shrimp. Great for cooking, grilling, or special meals.",
    image: MeatImg,
    path:'/seafood'
  },
];

const Category = () => {
  const renderCards = category.map((card) => (
    <div
      key={card.id}
      className="flex-1 basis-[300px] max-w-md group cursor-pointer"
    >
      <div className="w-full min-h-[30vh] relative -mb-10 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="absolute bottom-0 w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="bg-zinc-100 pt-24 p-8 rounded-xl text-center transition-all duration-300 group-hover:bg-zinc-200 group-hover:shadow-lg">
        <h3 className="text-3xl text-zinc-800 font-bold mb-4">{card.title}</h3>
        <p className="text-zinc-600 mt-4 mb-9 leading-relaxed">
          {card.description}
        </p>
        <Link
          to={card.path}
          className="px-7 py-2 bg-orange-500 text-white rounded transition-all duration-300 hover:bg-green-700 hover:shadow-md transform hover:scale-105"
        >
          See All
        </Link>
      </div>
    </div>
  ));

  return (
    <section className="bg-transparent">
      <div className="py-20 px-4">
        <Heading highlight="Shop" heading="by category" />
        <div className="flex flex-wrap gap-16 md:mt-[100px] mt-10 justify-center">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;
