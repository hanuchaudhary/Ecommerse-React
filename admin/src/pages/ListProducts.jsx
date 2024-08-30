import React, { useEffect } from "react";
import Card from "../components/Card";
import { useState } from "react";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const ListProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      let data = await response.json();
      if (Array.isArray(data.product)) {
        setAllProducts(data.product);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeHandler = async (id) => {
    await fetch("http://localhost:5000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchProducts();
  };

  if (!loading) {
    return (
      <div className="flex items-center justify-center h-full bg-zinc-800 md:p-5 p-2 rounded-lg">
        <Loader />
      </div>
    );
  }

  return allProducts.length > 0 ? (
    <div className="bg-zinc-800 md:p-5 p-2 rounded-lg">
      <h1 className="text-teal-700 font-semibold text-lg mb-5">All Products</h1>
      <div className="grid text-white grid-cols-8 w-full font-semibold capitalize mb-3">
        <h1 className="col-span-3 lg:col-span-2">Product image</h1>
        <h1 className="col-span-3">title</h1>
        <h1>price</h1>
        <h1 className="hidden lg:block">category</h1>
        <h1 className="text-center">remove</h1>
      </div>
      <div className="flex flex-col gap-5">
        {allProducts.map((item) => (
          <Card
            onClick={() => removeHandler(item.id)}
            productImage={item.image}
            price={item.price}
            productName={item.name}
            productCategory={item.category}
            key={item.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="bg-zinc-800 md:p-5 p-2 h-full rounded-lg flex items-center justify-center">
      <NotFound/>
    </div>
  );
};

export default ListProducts;
