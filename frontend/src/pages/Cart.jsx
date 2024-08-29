import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { AllProducts, cartAmount,minusFromCart, cartItem, removeFromCart } = useContext(shopContext);
  const isCartEmpty = Object.values(cartItem).every((quantity) => quantity === 0);

  if (isCartEmpty) {
    return <div className="mt-20">Your Shopping Bag is empty</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-20 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Shopping bag</h2>
          {AllProducts.map((item) => {
            if (cartItem[item.id] > 0) {
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-6"
                >
                  <Link to={`/product/${item.id}`} className="flex items-center">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p>Rs. {item.price.toFixed(2)}</p>
                      <p>Art.no: {item.id}</p>
                      <p>Colour: {item.color}</p>
                      <p>Size: {item.size}</p>
                    </div>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => minusFromCart()} className="bg-gray-200 text-xl px-2 rounded-full">
                      <h1>-</h1>
                    </button>
                    <h1></h1>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-gray-200 px-2 text-xl rounded-full"
                    >
                      <p>×</p>
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="bg-white sticky p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Order value</span>
            <span>Rs. {cartAmount().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>FREE</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-xl mb-4">
            <span>Total</span>
            <span>Rs. {cartAmount().toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg font-semibold">
            Continue to checkout
          </button>
          <p className="text-xs mt-4">
            Prices and delivery costs are not confirmed until you've reached the
            checkout. 15 days free returns. Customers would receive an
            SMS/WhatsApp notification regarding deliveries on the registered
            phone number.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
