import React from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import ListProducts from "./ListProducts";

const Admin = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-4 relative rounded-lg px-4 bg-zinc-900 w-full md:h-screen">
      <div className="md:sticky top-0 py-4 md:h-screen overflow-y-auto">
        <Sidebar />
      </div>
      <div className="col-span-3 md:h-screen overflow-y-auto py-5">
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
