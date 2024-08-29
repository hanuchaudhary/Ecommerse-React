import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-4 p-5">
        <Button label={"Add Product"} route={"/addproduct"}/>
        <Button label={"List Product"} route={"/listproduct"}/>
      </div>
    </div>
  );
};

export default Sidebar;
