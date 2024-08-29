import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContext";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<SingleProduct />} /> 
          <Route path="/mens" element={<Products category={"Mens Clothing"} />} />
          <Route path="/women" element={<Products category={"Womens Clothing"} />} />
          <Route path="/kids" element={<Products category={"Kids Clothing"} />} />
          <Route path="/baby" element={<Products category={"Baby Clothing"} />} />
          <Route path="/sport" element={<Products category={"Sports Clothing"} />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
};

export default App;
