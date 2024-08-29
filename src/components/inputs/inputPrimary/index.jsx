const InputPrimary = ({ label, placeholder }) => {
    return (
      <div className="w-full max-w-xs flex flex-col">
        <label className="block text-sm text-primary-dark font-normal" htmlFor="inputField">
          {label}
        </label>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 
          rounded px-4 h-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 my-1 text-sm italic"
          id="inputField"
          type="text"
          placeholder={placeholder}
        />
      </div>
    );
  }
  
  export default InputPrimary;