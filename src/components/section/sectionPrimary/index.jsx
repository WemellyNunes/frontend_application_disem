import { useState } from "react";

const SectionCard = ({ title, children }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white px-4 md:px-6 py-4 rounded-md shadow-md mb-0 mt-1.5 w-full">
      
      <h2
        className="text-primary-light text-sm md:text-base font-medium mb-4 cursor-pointer"
        onClick={toggleSection}
      >
        {title}
      </h2>

      <div
        className={`grid ${
          isOpen ? "block" : "hidden"
        } md:block transition-all duration-300 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionCard;