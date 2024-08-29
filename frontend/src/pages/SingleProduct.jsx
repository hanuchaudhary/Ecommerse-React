import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import FullViewProduct from "../components/FullViewProduct";
import { shopContext } from "../context/ShopContext";

const SingleProduct = () => {
  const { AllProducts } = useContext(shopContext);
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="mt-20 mx-5 lg:mx-20 mb-10">
        <Link className="hover:underline" to="/products">
          Shop
        </Link>{" "}
        |{" "}
        <Link
          className="hover:underline"
          to={`/${
            (product.category === "Mens Clothing" && "mens") ||
            (product.category === "Womens Clothing" && "women") ||
            (product.category === "Kids Clothing" && "kids")
          }`}
        >
          {product.category}
        </Link>{" "}
        | {product.name}
      </div>
      <FullViewProduct product={product} />
    </div>
  );
};

export default SingleProduct;
