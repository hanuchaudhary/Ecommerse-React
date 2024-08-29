import React from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import ListProducts from "./ListProducts";

const Admin = () => {
  return (
    <div className="grid grid-cols-4 h-full bg-zinc-900">
      <div className="">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Routes> py-5
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
