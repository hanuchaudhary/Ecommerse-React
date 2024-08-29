import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/products"
          element={<Products />}
          banner={"All Products"}
        />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route
          path="/mens"
          element={<Products category={"Mens Clothing"} banner={"Mens"} />}
        />
        <Route
          path="/women"
          element={<Products category={"Womens Clothing"} banner={"Womens"} />}
        />
        <Route
          path="/kids"
          element={<Products category={"Kids Clothing"} banner={"Kids"} />}
        />
        <Route
          path="/baby"
          element={<Products category={"Baby Clothing"} banner={"Baby"} />}
        />
        <Route
          path="/sport"
          element={<Products category={"Sports Clothing"} banner={"Sports"} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
