import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navElem, setNavElem] = useState(["shop", "collections", "search"]);
  const [menu, setMenu] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
      <div className="logo">bag.</div>
      <div className="midelems flex justify-center gap-10">
        {navElem.map((elem, index) => (
          <div 
            key={index} 
            onClick={() => setMenu(elem)} 
            className="cursor-pointer relative"
          >
            <Link>{elem}</Link>
            <hr 
              className={`border-t-1 border-black transition-transform duration-300 ease-in-out transform ${
                elem === menu ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-10">
        <Link to={"cart"} >Shopping Cart(0)</Link>
        <Link to={"signup"}>signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
