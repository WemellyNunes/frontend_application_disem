import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchInput = ({ placeholder }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`flex items-center ${isExpanded ? 'bg-blue-600 rounded-md w-full max-w-xs' : ''} bg-blue-600 h-9 px-2 rounded`  }>
            <FaSearch
                className="text-white cursor-pointer"
                onClick={toggleExpand}
            />
            <input
                type="text"
                placeholder={placeholder}
                className={`bg-blue-600 text-white placeholder-white rounded-md py-1 px-2 focus:outline-none w-full transition-all duration-300 ease-in-out ${isExpanded ? 'ml-2 block' : 'hidden'
                    } md:block`}
            />
        </div>
    );
};

export default SearchInput;