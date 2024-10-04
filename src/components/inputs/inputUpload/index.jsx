import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { FaTrash } from "react-icons/fa";


const InputUpload = ({ label }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).filter(file => 
      file.type === 'application/pdf' || 
      file.type === 'image/png' || 
      file.type === 'image/jpeg'
    );

    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="flex items-center border border-dashed border-primary-light rounded-md 
      p-4 cursor-pointer w-full md:w-2/4 hover:bg-blue-50 h-9 md:h-10 transition-colors duration-200">
        <FaUpload className="text-primary-light h-4 w-4 mr-3" />
        <span className="text-primary-light text-xs md:text-sm italic font-normal">{label}</span>
        <input 
          type="file" 
          className="hidden" 
          onChange={handleFileChange} 
          accept=".pdf, .png, .jpg, .jpeg"
          multiple 
        />
      </label>
      {files.length > 0 && (
        <div className="w-full md:w-2/4">
          {files.map((file, index) => (
            <div key={index} className="flex justify-between items-center border border-gray-200 rounded-md p-1.5 mt-1">
              <div className="flex flex-col">
                <span className="text-sm font-light text-primary-light">{file.name}</span>
                <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</span>
              </div>
              <button onClick={() => handleRemoveFile(file)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputUpload;
