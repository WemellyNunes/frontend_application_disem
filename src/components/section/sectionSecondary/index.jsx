const SectionSecondary = ({ title, children }) => {
    return (
      <div className="bg-white p-6 rounded-md shadow-md mb-0 mt-2.5">
        <h2 className="text-primary-light text-lg font-medium mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default SectionSecondary;