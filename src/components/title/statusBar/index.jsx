import { GiBackwardTime } from "react-icons/gi";

const StatusBar = ({ requisitionNumber, origin, situation, reopening, onHistoryClick }) => {
    return (
        <div className="flex justify-between items-center px-2 py-1 mt-1 mx-4 border-b border-primary-light bg-white shadow-md rounded">
            <div className="flex space-x-2 md:space-x-6">
                <div>
                    <h4 className="text-xs font-medium text-primary-light  md:text-sm">N° da requisição</h4>
                    <p className="text-xs font-normal text-primary-dark md:text-sm">{requisitionNumber}</p>
                </div>
                <div>
                    <h4 className="text-xs font-medium text-primary-light md:text-sm">Origem</h4>
                    <p className="text-xs font-normal text-primary-dark md:text-sm">{origin}</p>
                </div>
                <div>
                    <h4 className="text-xs font-medium text-primary-light  md:text-sm">Situação</h4>
                    <p className="text-xs font-normal text-primary-dark md:text-sm">{situation}</p>
                </div>
                <div>
                    <h4 className="text-xs font-medium text-primary-light  md:text-sm">Reabertura</h4>
                    <p className="text-xs font-normal text-primary-dark md:text-sm">{reopening}</p>
                </div>
            </div>

            <div>
                <button
                    onClick={onHistoryClick}
                    className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-primary-light hover:bg-blue-700 text-white rounded-full focus:outline-none"
                >
                    <span className=""><GiBackwardTime/></span>
                </button>
            </div>
        </div>
    );
};

export default StatusBar;