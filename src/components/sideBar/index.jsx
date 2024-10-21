import { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { FaBars } from "react-icons/fa"; // Ícone de menu sanduíche

const Sidebar = () => {
  // Estado para controlar se o menu está colapsado
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Função para alternar o estado de colapso
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen bg-white shadow ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col fixed`} // Classe "fixed" para manter fixo
      style={{ height: '100vh' }} // Mantém altura completa da tela
    >
      <div className="flex flex-col p-4">
        <div className={`flex flex-col ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="flex flex-col mb-6">
            <div className="flex items-center justify-start gap-x-2 text-primary-light mt-2">
              <MdEngineering size={30} />
              {!isCollapsed && (
                <span className="ml-2 text-base font-semibold text-primary-light">
                  E.M System
                </span>
              )}
            </div>
          </div>

          {/* Botão de Ocultar menu */}
          <div className="flex flex-row">
            <button
              className="text-blue-500 flex items-center gap-x-2"
              onClick={toggleSidebar}
            >
              {/* Ícone de menu sanduíche quando o menu está colapsado */}
              {isCollapsed ? (
                <FaBars size={20} />
              ) : (
                <>
                  <FaBars size={20} />
                  <span className="ml-2">Ocultar menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* Menu Options */}
        <div className="flex flex-col">
          <a href="#" className="flex items-center text-primary-light border-b px-4 py-4 hover:bg-gray-100">
            <MdOutlineDashboard />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </a>
          <a href="#" className="flex items-center text-primary-light border-b px-4 py-4 hover:bg-gray-100">
            <FaFilePen />
            {!isCollapsed && <span className="ml-2">Programar OS</span>}
          </a>
          <a href="#" className="flex items-center text-primary-light border-b px-4 py-4 hover:bg-gray-100">
            <FaRegListAlt />
            {!isCollapsed && <span className="ml-2">Lista de OS</span>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
