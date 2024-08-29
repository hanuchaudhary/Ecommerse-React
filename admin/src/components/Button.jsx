import React from "react";
import { Link } from "react-router-dom";
const Button = ({ label, onClick, route }) => {
  return (
    <Link to={route}>
      <button
        onClick={onClick}
        type="button"
        className="text-white bg-zinc-800 hover:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600 dark:border-zinc-600"
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
