const InputSecondary = ({ label, placeholder, buttonIcon, onButtonClick, type = 'text' }) => {
    return (
      <div className="w-full mb-4 mt-4">
        <label className="block text-primary-dark text-sm font-normal" htmlFor="inputWithButton">
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 
            rounded h-10 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-blue-500 my-1 text-sm italic"
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