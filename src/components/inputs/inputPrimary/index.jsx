import {forwardRef } from "react"; // Certifique-se de incluir forwardRef aqui


const InputPrimary = forwardRef(({ label, placeholder, value, onChange, className, disabled }, ref) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="block text-xs md:text-sm text-primary-dark font-normal mb-1" htmlFor="inputField">
        {label}
      </label>
      <input
        className={`block appearance-none w-full text-primary-dark bg-white border border-gray-300 
          rounded px-4 h-9 md:h-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 my-1 text-xs md:text-sm italic ${className} ${disabled ? 'bg-gray-100' : ''} `}
        id="inputField"
        type="text"
        placeholder={placeholder}
        value={value} // Aqui estamos utilizando o valor passado como prop
        onChange={(e) => onChange(e.target.value)} // Chama a função passada como prop
        ref={ref}
        disabled={disabled}
      />
    </div>
  );
});

export default InputPrimary;