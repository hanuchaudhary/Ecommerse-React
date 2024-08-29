import React from "react";
import { Link } from "react-router-dom";

const Card = ({ productName, productCategory, productImage, price, id }) => {
  return (
    <Link to={`/product/${id}`} className="lg:w-72 mb-4">
      <div className="card lg:h-96">
        <img className="h-full w-full object-cover" src={productImage} alt={productName} />
      </div>
      <div className="details mt-4 text-sm capitalize">
        <h1 className="font-semibold text-md text-zinc-500">
          {productCategory}
        </h1>
        <h1>{productName}</h1>
        <h1 className="font-semibold">${price}</h1>
      </div>
    </Link>
  );
};

export default Card;
