import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FullViewProduct from "../components/FullViewProduct";

const Home = () => {
  return (
    <div>

      <Navbar />
      <FullViewProduct />
      <div className="conatiner mx-10 md:mx-20 lg:mx-40">
        <div className="hidden md:grid grid-cols-3 mt-20 select-none borer-2 border-dashed border-black bg-yellow-200 py-10">
          <h1 >Free shipping above $1999</h1>
          <h1 className="text-center">Free shipping above $1999</h1>
          <h1 className="text-end">Free shipping above $1999</h1>
        </div>
        <div className="images mt-20 md:mt-10 flex flex-col gap-10">
          <div className="h-96 bg-teal-800 "></div>
          <div className="h-96 bg-teal-800 "></div>
          <div className="h-96 bg-teal-800 "></div>
          <div className="h-96 bg-teal-800 "></div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
