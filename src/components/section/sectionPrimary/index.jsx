const SectionCard = ({ title, children }) => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md mb-0 mt-4 mx-4">
        <h2 className="text-primary-light text-lg font-medium mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default SectionCard;