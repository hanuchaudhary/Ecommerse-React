import React from "react";
import { Link, useLocation } from "react-router-dom";

const CategoryNav = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center gap-10 my-20 border-black border-y-2 border-dashed py-5">
      <Link
        className={`hover:underline ${location.pathname === "/mens" ? "underline" : ""}`}
        to="/mens"
      >
        Men
      </Link>
      <Link
        className={`hover:underline ${location.pathname === "/women" ? "underline" : ""}`}
        to="/women"
      >
        Ladies
      </Link>
      <Link
        className={`hover:underline ${location.pathname === "/kids" ? "underline" : ""}`}
        to="/kids"
      >
        Kids
      </Link>
      <Link
        className={`hover:underline ${location.pathname === "/baby" ? "underline" : ""}`}
        to="/baby"
      >
        Baby
      </Link>
      <Link
        className={`hover:underline ${location.pathname === "/sport" ? "underline" : ""}`}
        to="/sport"
      >
        Sports
      </Link>
    </div>
  );
};

export default CategoryNav;
