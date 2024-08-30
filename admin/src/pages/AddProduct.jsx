import React, { useState } from "react";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

const AddProduct = () => {
  const [productDetails, setproductDetails] = useState({
    name: "",
    description: "",
    price: "",
    color: "",
    category: "",
    size: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = name === "price" ? parseFloat(value) || "" : value;
    setproductDetails((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
  };

  const handleImageChange = (e) => {
    setproductDetails((prevFormData) => ({
      ...prevFormData,
      image: e.target.files[0],
    }));
  };

  const handleAddButton = async () => {
    // console.log(productDetails);
    let resData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("image", productDetails.image);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => (resData = res));

    if (resData.success) {
      product.image = resData.image_url;
    }
    console.log(resData);

    await fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(product, (product.image = resData.file)),
    });
  };

  return (
    <div>
      <div className="bg-zinc-800 h-full p-3 rounded-lg">
        <form>
          <Input
            value={productDetails.name}
            onChange={handleInputChange}
            label={"Name"}
            type="text"
            name="name"
            placeholder={"Enter name of product"}
          />
          <Input
            value={productDetails.description}
            onChange={handleInputChange}
            label={"Description"}
            type="text"
            name="description"
            placeholder={"Enter description of product"}
          />
          <Input
            value={productDetails.color}
            onChange={handleInputChange}
            label={"Color"}
            type="text"
            name="color"
            placeholder={"Enter color of product"}
          />
          <Input
            value={productDetails.price}
            onChange={handleInputChange}
            label={"Price"}
            type="text"
            name="price"
            placeholder={"Enter Price of product"}
          />
          <div className="dropdown grid grid-cols-2 gap-10">
            <Dropdown
              label={"Category"}
              selectlabel={"Select category"}
              options={[
                "Mens Clothing",
                "Womens Clothing",
                "Kids Clothing",
                "Babys Clothing",
                "Sport Clothing",
              ]}
              value={productDetails.category}
              onChange={handleInputChange}
              name="category"
            />
            <Dropdown
              label={"Size"}
              selectlabel={"Select Size"}
              options={["XS", "S", "M", "L", "XL"]}
              value={productDetails.size}
              onChange={handleInputChange}
              name="size"
            />
          </div>
          <div className="fileUpload flex flex-col md:grid grid-cols-3 gap-10 mt-5">
            <div className="col-span-2">
              <label
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                onChange={handleImageChange}
                className="block w-full text-md py-2 px-1 text-zinc-900 border border-zinc-300 rounded-lg cursor-pointer bg-zinc-50 dark:text-zinc-400 focus:outline-none dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400"
                id="file_input"
                type="file"
                name="image"
              />
            </div>
            <div className="text-white">
              <label className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">
                Image Preview
              </label>
              <div className="bg-[#d5f365] bg-opacity-55 h-52 rounded-lg border border-zinc-600 flex justify-center items-center">
                {productDetails.image && (
                  <img
                    src={URL.createObjectURL(productDetails.image)}
                    alt="Product Preview"
                    className="object-cover h-full w-full rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-0">
            <Button label={"Add"} onClick={handleAddButton} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
