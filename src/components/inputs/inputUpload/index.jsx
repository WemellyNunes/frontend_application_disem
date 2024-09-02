import { FaUpload } from 'react-icons/fa';

const InputUpload = ({ label }) => {
  return (
    <label className="flex items-center border border-dashed border-primary-light rounded-md 
    p-4 cursor-pointer w-full max-w-lg mx-auto hover:bg-blue-50 h-10 transition-colors duration-200">
      <FaUpload className="text-primary-light h-4 w-4 mr-3" />
      <span className="text-primary-light font-normal">{label}</span>
      <input type="file" className="hidden" />
    </label>
  );
};

export default InputUpload;