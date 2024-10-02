const InputSecondary = ({ label, placeholder, buttonIcon, onButtonClick, type = 'text' }) => {
    return (
      <div className="w-full ">
        <label className="block text-primary-dark text-xs md:text-sm font-light mb-1" htmlFor="inputWithButton">
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 
            rounded h-9 md:h-10 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-blue-500 my-1 text-xs md:text-sm italic"
            id="inputWithButton"
            type={type}
            placeholder={placeholder}
          />
          <button
            onClick={onButtonClick}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary-light focus:outline-none "
          >
            {buttonIcon}
          </button>
        </div>
      </div>
    );
  }
  
  export default InputSecondary;