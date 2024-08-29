import React, { useState } from "react";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    size: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: e.target.files[0],
    }));
  };

  const handleAddButton = () => {
    console.log(formData);
    // Add your API call here
  };

  return (
    <div>
      <div className="bg-zinc-800 h-full p-5 rounded-lg m-5">
        <Input
          value={formData.name}
          onChange={handleInputChange}
          label={"Name"}
          type="text"
          name="name"
          placeholder={"Enter name of product"}
        />
        <Input
          value={formData.description}
          onChange={handleInputChange}
          label={"Description"}
          type="text"
          name="description"
          placeholder={"Enter description of product"}
        />
        <Input
          value={formData.price}
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
            options={["Mens Clothing", "Womens Clothing", "Kids Clothing", "Babys Clothing", "Sport Clothing"]}
            value={formData.category}
            onChange={handleInputChange}
            name="category"
          />
          <Dropdown
            label={"Size"}
            selectlabel={"Select Size"}
            options={["XS", "S", "M", "L", "XL"]}
            value={formData.size}
            onChange={handleInputChange}
            name="size"
          />
        </div>
        <div className="fileUpload grid grid-cols-3 gap-10 mt-10">
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
            <div className="bg-rose-900 h-52 rounded-lg border border-zinc-600 flex justify-center items-center">
              {formData.image && (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Product Preview"
                  className="object-cover h-full w-full rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
        <Button label={"Add"} onClick={handleAddButton} />
      </div>
    </div>
  );
};

export default AddProduct;
