import React from "react";
import { Link } from "react-router-dom";
const CategoryNav = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 my-20 border-black border-y-2 border-dashed py-5">
        <Link className="hover:underline" to={"/women"}>
          Ladies
        </Link>
        <Link className="hover:underline" to={"/kids"}>
          Kids
        </Link>
        <Link className="hover:underline" to={"/mens"}>
          Men
        </Link>
        <Link className="hover:underline" to={"/baby"}>
          Baby
        </Link>
        <Link className="hover:underline" to={"/sport"}>
          Sports
        </Link>
      </div>
    </div>
  );
};

export default CategoryNav;
