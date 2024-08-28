import React from "react";
import Card from "../components/Card";

const Products = () => {
  let data = [
    { name: "Regular Fit T-shirt", category: "Mens Fashion", price: 67 },
    { name: "Regular Fit T-shirt", category: "Mens Fashion", price: 67 },
    { name: "Regular Fit T-shirt", category: "Mens Fashion", price: 67 },
    { name: "Regular Fit T-shirt", category: "Mens Fashion", price: 67 },
    { name: "Regular Fit T-shirt", category: "Mens Fashion", price: 67 },
    { name: "Regular Fit T-shirt", category: "Mens Fashion", price: 67 },
  ];
  return (
    <div className="grid grid-cols-4 mx-20">
      {data.map((e)=><Card productName={e.name} productCategory={e.category} price={e.price}/>)}
    </div>
  );
};

export default Products;
