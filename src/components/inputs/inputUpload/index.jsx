import { FaUpload } from 'react-icons/fa';

const InputUpload = ({ label }) => {
  return (
    <div className="flex mb-4">
      <label className="flex items-center border border-dashed border-primary-light rounded-md 
      p-4 cursor-pointer w-full md:w-2/4 hover:bg-blue-50 h-9 md:h-10 transition-colors duration-200">
        <FaUpload className="text-primary-light h-4 w-4 mr-3" />
        <span className="text-primary-light text-xs md:text-sm italic font-normal">{label}</span>
        <input type="file" className="hidden" />
      </label>
    </div>
  );
};

export default InputUpload;