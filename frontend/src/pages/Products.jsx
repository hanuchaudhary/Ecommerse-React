import React, { useContext } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import CategoryNav from "../components/CategoryNav";

const Products = ({ category }) => {
  const { AllProducts } = useContext(shopContext);

  return (
    <div>
      <CategoryNav/>
      <div className="grid grid-cols-4 mx-20">
        {AllProducts.filter(item => !category || item.category === category).map((item, index) => (
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
