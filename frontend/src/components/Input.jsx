import React from "react";

const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full">
      <label
        className="block capitalize mb-2 text-sm font-medium text-zinc-900"
      >
        {label}
      </label>
      <input
        type={type}
        className="bg-zinc-50 border-2 text-zinc-900 text-md rounded-none border-black block w-full p-3 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
