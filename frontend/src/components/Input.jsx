const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => {
  return (
    <div className="w-full">
      <label
        className="block capitalize mb-2 text-sm font-medium text-zinc-900"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="bg-zinc-50 border-2 text-zinc-900 text-md rounded-none border-black block w-full p-3"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
