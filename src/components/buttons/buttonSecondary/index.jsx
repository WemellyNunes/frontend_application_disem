const ButtonSecondary = ({ children, ...props }) => {
   
    return (
      <button
        className="border border-primary-light bg-white hover:bg-secondary-hover
        text-primary-light font-medium text-sm md:text-base h-9 md:h-10 px-10 rounded-full flex 
        items-center justify-center mr-1.5"
        {...props}
      >
        {children}
      </button>
    );
  };

export default ButtonSecondary;