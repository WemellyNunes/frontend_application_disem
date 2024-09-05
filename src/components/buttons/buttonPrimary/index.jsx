const ButtonPrimary = ({ children, ...props }) => {
    return (
      <button
        className="bg-primary-light hover:bg-primary-hover text-white 
        font-medium text-base h-10 px-10 rounded-full flex items-center 
        justify-center mr-1.5"
        {...props}
      >
        {children}
      </button>
    );
  };

export default ButtonPrimary;