import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="text-white w-full bg-black hover:bg-zinc-90 focus:outline-none focus:ring-2 focus:ring-zinc-400 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
