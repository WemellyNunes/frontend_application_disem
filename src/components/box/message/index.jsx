import { FaCheckCircle, FaTimesCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

const MessageBox = ({ type, title, message, onClose }) => {
    const iconTypes = {
        success: <FaCheckCircle className="text-green-700" />,
        error: <FaTimesCircle className="text-red-500" />,
        warning: <FaExclamationCircle className="text-yellow-500" />,
        info: <FaInfoCircle className="text-blue-500" />
    };

    const backgroundTypes = {
        success: 'bg-green-100',
        error: 'bg-red-100',
        warning: 'bg-yellow-100',
        info: 'bg-blue-100'
    };

    return (
        <div className="fixed inset-0 flex justify-center items-start z-50">
            <div className={`relative w-full py-6 px-2 md:px-6  shadow-lg ${backgroundTypes[type]} flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                    {iconTypes[type]}
                    <div className="flex items-center space-x-1">
                        <span className='text-primary-dark text-sm md:text-lg font-medium'>{title}</span>
                        <span className="text-primary-dark text-sm md:text-lg font-normal">{message}</span>
                    </div>
                </div>
                <button 
                    className="absolute top-2 right-2 text-green-700 text-sm font-semibold"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default MessageBox;