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
        className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
