import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Loose Fit Shirt",
      price: 1499.0,
      artNo: "1223045001",
      color: "White",
      size: "M",
      quantity: 1,
      imageUrl: "/path-to-image/loose-fit-shirt.png",
    },
    {
      id: 2,
      name: "Slim Fit Ribbed vest top",
      price: 699.0,
      artNo: "1158014005",
      color: "White",
      size: "M",
      quantity: 1,
      imageUrl: "/path-to-image/slim-fit-ribbed-vest-top-white.png",
    },
    {
      id: 3,
      name: "Slim Fit Ribbed vest top",
      price: 699.0,
      artNo: "1158014008",
      color: "Dark brown",
      size: "M",
      quantity: 1,
      imageUrl: "/path-to-image/slim-fit-ribbed-vest-top-brown.png",
    },{
      id: 3,
      name: "Slim Fit Ribbed vest top",
      price: 699.0,
      artNo: "1158014008",
      color: "Dark brown",
      size: "M",
      quantity: 1,
      imageUrl: "/path-to-image/slim-fit-ribbed-vest-top-brown.png",
    },{
      id: 3,
      name: "Slim Fit Ribbed vest top",
      price: 699.0,
      artNo: "1158014008",
      color: "Dark brown",
      size: "M",
      quantity: 1,
      imageUrl: "/path-to-image/slim-fit-ribbed-vest-top-brown.png",
    },{
      id: 3,
      name: "Slim Fit Ribbed vest top",
      price: 699.0,
      artNo: "1158014008",
      color: "Dark brown",
      size: "M",
      quantity: 1,
      imageUrl: "/path-to-image/slim-fit-ribbed-vest-top-brown.png",
    },
  ]);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-20 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Shopping bag</h2>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-6"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p>Rs. {item.price.toFixed(2)}</p>
                  <p>Art.no: {item.artNo}</p>
                  <p>Colour: {item.color}</p>
                  <p>Size: {item.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 p-2 rounded">
                  <i className="fas fa-heart"></i>
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  className="w-12 text-center border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-gray-200 p-2 rounded"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white sticky p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Order value</span>
            <span>Rs. {calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>FREE</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-xl mb-4">
            <span>Total</span>
            <span>Rs. {calculateTotal().toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg font-semibold">
            Continue to checkout
          </button>

          {/* Payment Options */}
          <div className="mt-4 text-sm">
            <p>We accept</p>
            <div className="flex space-x-2 mt-2">
              <img
                src="/path-to-payment-logo/visa.png"
                alt="Visa"
                className="w-10"
              />
              <img
                src="/path-to-payment-logo/rupay.png"
                alt="RuPay"
                className="w-10"
              />
              <img
                src="/path-to-payment-logo/upi.png"
                alt="UPI"
                className="w-10"
              />
              <img
                src="/path-to-payment-logo/emi.png"
                alt="EMI"
                className="w-10"
              />
              <img
                src="/path-to-payment-logo/diners-club.png"
                alt="Diners Club"
                className="w-10"
              />
            </div>
          </div>

          {/* Disclaimer */}
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
