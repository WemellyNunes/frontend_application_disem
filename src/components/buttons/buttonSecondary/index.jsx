const ButtonSecondary = ({ children, ...props }) => {
   
    return (
      <button
        className="border border-primary-light bg-white hover:bg-secondary-hover
        text-primary-light font-medium text-base h-10 px-6 rounded-full flex 
        items-center justify-center mr-1.5"
        {...props}
      >
        {children}
      </button>
    );
  };

export default ButtonSecondary;