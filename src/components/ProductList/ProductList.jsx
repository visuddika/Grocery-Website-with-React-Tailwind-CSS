import Fruits1 from "../../assets/Fruits1.png";
import Fruits2 from "../../assets/Fruits2.png";
import Fruits3 from "../../assets/Fruits3.png";
import Fruits4 from "../../assets/Fruits4.png";
import Fruits5 from "../../assets/Fruits5.png";
import Fruits6 from "../../assets/Fruits6.png";
import Fruits7 from "../../assets/Fruits7.png";
import Strawberry from "../../assets/Strawberry.png";
import Cherry from "../../assets/Cherry.png";

import Vegetables1 from "../../assets/Vegetabales1.png"; // File might not exist – check spelling
import Vegetables2 from "../../assets/Vegetabales2.png";
import Vegetables3 from "../../assets/Vegetabales3.png";
import Vegetables4 from "../../assets/Vegetabales4.png";
import Vegetables5 from "../../assets/Vegetabales5.png";
import Vegetables6 from "../../assets/Vegetabales6.png";
import Vegetables7 from "../../assets/Vegetabales7.png";
import Vegetables8 from "../../assets/Vegetabales8.png";

import Dairy1 from "../../assets/Dairy1.png";
import Dairy2 from "../../assets/Dairy2.png";
import Dairy3 from "../../assets/Dairy3.png";
import Dairy4 from "../../assets/Dairy4.png";

import SeaFood1 from "../../assets/SeaFood1.png";
import SeaFood2 from "../../assets/SeaFood2.png";
import SeaFood3 from "../../assets/SeaFood3.png";
import SeaFood4 from "../../assets/SeaFood4.png";
import Beef from "../../assets/Beef.png";
import chiken from "../../assets/chiken.png";

const ProductList = [
  // Fruits
  { id: 1, name: 'Water Melon (100g)', price: 100.0, category: 'Fruits', image: Fruits1 },
  { id: 2, name: 'Pomegranate (100g)', price: 200.0, category: 'Fruits', image: Fruits2 },
  { id: 3, name: 'Dragonfruit (100g)', price: 235.0, category: 'Fruits', image: Fruits3 },
  { id: 4, name: 'Papaya (100g)', price: 89.0, category: 'Fruits', image: Fruits4 },
  { id: 5, name: 'Orange (100g)', price: 90.0, category: 'Fruits', image: Fruits5 },
  { id: 6, name: 'Apple (100g)', price: 82.0, category: 'Fruits', image: Fruits6 },
  { id: 7, name: 'Pineapple (100g)', price: 120.0, category: 'Fruits', image: Fruits7 },
  { id: 8, name: 'Strawberry (100g)', price: 180.0, category: 'Fruits', image: Strawberry },
  { id: 9, name: 'Cherry (100g)', price: 200.0, category: 'Fruits', image: Cherry },

  // Vegetables
  { id: 10, name: 'Tomato (100g)', price: 50.0, category: 'Vegetables', image: Vegetables1 },
  { id: 11, name: 'Purple Cabbage (100g)', price: 210.0, category: 'Vegetables', image: Vegetables2 },
  { id: 12, name: 'Broccoli (100g)', price: 135.0, category: 'Vegetables', image: Vegetables3 },
  { id: 13, name: 'Bell Pepper (100g)', price: 150.0, category: 'Vegetables', image: Vegetables4 },
  { id: 14, name: 'Iceberg Lettuce Leaf (100g)', price: 200.0, category: 'Vegetables', image: Vegetables5 },
  { id: 15, name: 'Cabbage (100g)', price: 120.0, category: 'Vegetables', image: Vegetables6 },
  { id: 16, name: 'Cucumber (100g)', price: 100.0, category: 'Vegetables', image: Vegetables7 },
  { id: 17, name: 'Sugar Beet (100g)', price: 90.0, category: 'Vegetables', image: Vegetables8 },

  // Dairy
  { id: 18, name: 'Eggs (100g)', price: 32.0, category: 'Dairy', image: Dairy1 },
  { id: 19, name: 'Fresh Milk (100g)', price: 100.0, category: 'Dairy', image: Dairy2 },
  { id: 20, name: 'Cheese (100g)', price: 219.0, category: 'Dairy', image: Dairy3 },
  { id: 21, name: 'Milk (100g)', price: 130.0, category: 'Dairy', image: Dairy4 },

  // Seafood
  { id: 22, name: 'Squid (100g)', price: 300.0, category: 'Seafood', image: SeaFood1 },
  { id: 23, name: 'Lobster (100g)', price: 310.0, category: 'Seafood', image: SeaFood2 },
  { id: 24, name: 'Mixed Seafood (100g)', price: 250.0, category: 'Seafood', image: SeaFood3 },
  { id: 25, name: 'Crab Portunidae (100g)', price: 200.0, category: 'Seafood', image: SeaFood4 },
  { id: 26, name: 'Beef (100g)', price: 335.0, category: 'Seafood', image: Beef },
  { id: 27, name: 'Chicken (100g)', price: 110.0, category: 'Seafood', image: chiken },
];

export default ProductList;
