import React from "react";

const Dropdown = ({ label, selectlabel, options, value, onChange, name }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        name={name}
        className="block w-full text-md py-2 px-1 text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 dark:text-zinc-400 focus:outline-none dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400"
      >
        <option value="">{selectlabel}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
