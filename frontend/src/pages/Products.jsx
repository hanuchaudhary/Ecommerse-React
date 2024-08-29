import React, { useContext } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import CategoryNav from "../components/CategoryNav";

const Products = ({ category, banner }) => {
  const { AllProducts } =  useContext(shopContext);


  if (!AllProducts) {
    return (
      <div className="flex items-center justify-center">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <div className="flex justify-center md:px-4 px-2 items-center flex-col">
      <CategoryNav />
      <div className="bg-neutral-600 leading-tight tracking-tighter py-6 text-white font-semibold mb-10 w-full text-9xl ">
        {banner}
      </div>
      <div className="grid md:grid-cols-3 gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
        {AllProducts.filter(
          (item) => !category || item.category === category
        ).map((item, index) => (
          <Card
            id={item.id}
            key={index}
            productImage={item.image_url}
            productName={item.name}
            productCategory={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
