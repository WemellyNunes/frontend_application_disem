import { useState } from 'react';
import { FaUpload, FaTrash } from 'react-icons/fa';
import UploadModal from '../../modal/upload';
import PreviewFile from '../../modal/preview';

const InputUpload = ({ label, disabled, className, onFilesUpload }) => {
    const [showModal, setShowModal] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [previewFile, setPreviewFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleUpload = (files, description) => {
        const newFiles = files.map(file => ({ file, description }));
        // Atualiza o estado e chama onFilesUpload com os novos arquivos
        setUploadedFiles(prev => {
            const updatedFiles = [...prev, ...newFiles];
            onFilesUpload(updatedFiles); // Chama aqui com o novo estado
            return updatedFiles;
        });
        setShowModal(false); // Fecha o modal aqui
    };
    
    const handleRemoveFile = (fileToRemove) => {
        if (disabled) return; // Se estiver desabilitado, não remove o arquivo
        setUploadedFiles(prevFiles => {
            const updatedFiles = prevFiles.filter(item => item.file.name !== fileToRemove.name);
            onFilesUpload(updatedFiles); // Chama aqui após a remoção
            return updatedFiles;
        });
    };

    const handlePreviewFile = (file) => {
        setPreviewFile(file);
        setShowPreview(true); 
    };

    return (
        <div className={`flex flex-col mb-4`}>
            <label 
                className={`flex items-center border border-dashed rounded-md p-4 cursor-pointer w-full md:w-2/4 
                h-9 md:h-10 transition-colors duration-200 ${disabled ? 'bg-gray-100 border-gray-300 text-gray-400' : 'border-primary-light hover:bg-blue-50'} ${className}`}
                onClick={() => !disabled && setShowModal(true)}
            >
                <FaUpload className={`h-4 w-4 mr-3 ${disabled ? 'text-gray-400' : 'text-primary-light'}`} />
                <span className={`text-xs md:text-sm italic font-normal ${disabled ? 'text-gray-400' : 'text-primary-light'}`}>
                    {label}
                </span>
            </label>

            {uploadedFiles.length > 0 && (
                <div className="w-full md:w-2/4">
                    {uploadedFiles.map((item, index) => (
                        <div key={index} className={`flex justify-between items-center border rounded-md p-1.5 mt-1 ${disabled ? 'bg-gray-50' : 'border-gray-200'}`}>
                            <div className="flex flex-col">
                                <span className={`text-xs md:text-sm font-light ${disabled ? 'text-gray-500' : 'text-primary-light'}`}>{item.file.name}</span>
                                <span className="text-xs text-gray-500">{(item.file.size / 1024).toFixed(2)} KB</span>
                                <span className="text-xs text-gray-500">Descrição: {item.description}</span>
                            </div>
                            <div className="flex">
                                <button 
                                    onClick={() => handlePreviewFile(item.file)} 
                                    className={`text-blue-500 text-xs md:text-sm mr-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={disabled} // Desabilita o botão se o upload estiver desabilitado
                                >
                                    Visualizar
                                </button>
                                <button 
                                    onClick={() => handleRemoveFile(item.file)} 
                                    className={`text-red-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={disabled} // Desabilita o botão de remoção
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <UploadModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                onUpload={handleUpload}
            />

            {showPreview && (
                <PreviewFile
                    file={previewFile} 
                    onClose={() => setShowPreview(false)} 
                />
            )}
        </div>
    );
};

export default InputUpload;
