import React from "react";

const Card = ({ productName, productCategory, productImage, price, onClick }) => {
  return (
    <div className="grid text-white grid-cols-8 w-full">
      <div className="col-span-3 lg:col-span-2 w-44 overflow-hidden h-32 rounded-md">
        <img className="object-cover h-full w-full" src={productImage} alt="" />
      </div>
      <h1 className="col-span-3 text-start">{productName}</h1>
      <h1>${price}</h1>
      <h1 className="hidden lg:block">{productCategory}</h1>
      <div onClick={onClick} className="remove text-center ">
        <h1 className="bg-zinc-400 cursor-pointer inline-block text-black font-bold text-xl rounded-full px-2">×</h1>
      </div>
    </div>
  );
};

export default Card;
