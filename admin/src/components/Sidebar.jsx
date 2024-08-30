import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="h-full pl-2">
      <div className="flex flex-col gap-4">
        <Button label={"Add Product"} route={"/addproduct"}/>
        <Button label={"List Products"} route={"/listproduct"}/>
      </div>
    </div>
  );
};

export default Sidebar;
