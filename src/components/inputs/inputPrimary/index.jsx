import { useState, forwardRef } from "react";

const InputPrimary = forwardRef(({ label, placeholder }, ref) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full flex flex-col mb-4">
      <label className="block text-xs md:text-sm text-primary-dark font-normal mb-1" htmlFor="inputField">
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-white text-gray-700 border border-gray-300 
          rounded px-4 h-9 md:h-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 my-1 text-xs md:text-sm italic
           ${value ? 'bg-blue-50' : 'bg-white'}`}
        id="inputField"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        ref={ref}
      />
    </div>
  );
});

export default InputPrimary;
