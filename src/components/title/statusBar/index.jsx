import { GiBackwardTime } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineFileText } from "react-icons/ai"; // ícones para adicionar e visualizar relatos


const StatusBar = ({ requisitionNumber, origin, situation, reopening, onHistoryClick, onAddReportClick, onViewReportsClick, reportsCount }) => {

    

    return (
        <div className="flex justify-between items-center px-2 py-1 mt-1 border-b border-primary-light bg-white rounded">
      <div className="flex space-x-2 md:space-x-6">
        <div>
          <h4 className="text-xs font-medium text-primary-light md:text-sm">N° requisição</h4>
          <p className="text-xs font-normal text-primary-dark md:text-sm">{requisitionNumber}</p>
        </div>
        <div>
          <h4 className="text-xs font-medium text-primary-light md:text-sm">Origem</h4>
          <p className="text-xs font-normal text-primary-dark md:text-sm">{origin}</p>
        </div>
        <div>
          <h4 className="text-xs font-medium text-primary-light md:text-sm">Situação</h4>
          <p className="text-xs font-normal text-primary-dark md:text-sm">{situation}</p>
        </div>
        <div>
          <h4 className="text-xs font-medium text-primary-light md:text-sm">Reabertura</h4>
          <p className="text-xs font-normal text-primary-dark md:text-sm">{reopening}</p>
        </div>
      </div>

      <div className="flex space-x-2">
        {/* Botão para Adicionar Relato */}
        <button
          onClick={onAddReportClick}
          className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-green-500 hover:bg-green-700 text-white rounded-full focus:outline-none" title="Adicionar relato"
        >
          <span><AiOutlinePlus size={16} /></span>
        </button>

        {/* Botão para Ver Relatos */}
        <button
          onClick={onViewReportsClick}
          className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-blue-500 hover:bg-blue-700 text-white rounded-full focus:outline-none relative" title="Ver relatos"
        >
          <span><AiOutlineFileText size={16} /></span>
          {reportsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {reportsCount}
            </span>
          )}
        </button>

        {/* Botão de Histórico */}
        <button
          onClick={onHistoryClick}
          className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-orange-400 hover:bg-orange-700 text-white rounded-full focus:outline-none" title="Histórico"
        >
          <span><GiBackwardTime size={16} /></span>
        </button>
      </div>
    </div>
  );
};


export default StatusBar;