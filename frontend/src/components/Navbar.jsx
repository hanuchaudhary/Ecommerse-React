import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const { getTotalCartCount } = useContext(shopContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = scrollPosition > currentScrollPos;

      setIsVisible(visible);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <div
      className={`grid grid-cols-3 w-full py-4 bg-white bg-opacity-60 backdrop-blur-sm px-10 capitalize text-md font-normal fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <Link to={"/"} className="logo">
        bag.
      </Link>
      <div className="midelems flex justify-center gap-10">
        <Link to={"/"}>Shop</Link>
        <Link to={"/products"}>Collections</Link>
        <Link to={"/search"}>Search</Link>
      </div>
      <div className="flex justify-end gap-10">
        <Link to={"/cart"}>Shopping Cart({getTotalCartCount()})</Link>
        <Link to={"/signup"}>signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
