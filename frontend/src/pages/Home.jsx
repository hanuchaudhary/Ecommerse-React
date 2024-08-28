import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="conatiner mx-40">
        <div className="grid grid-cols-3 mt-20 select-none">
          <h1>Free shipping above $1999</h1>
          <h1>Free shipping above $1999</h1>
          <h1>Free shipping above $1999</h1>
        </div>
        <div className="images mt-10 flex flex-col gap-10">
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
