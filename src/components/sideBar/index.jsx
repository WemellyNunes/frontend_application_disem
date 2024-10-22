import { useState } from 'react';
import { NavLink } from "react-router-dom"; // Importamos NavLink para navegação
import { MdOutlineDashboard } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { FaBars } from "react-icons/fa"; // Ícone de menu sanduíche

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`h-screen bg-white shadow ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col fixed`} // Classe "fixed" para manter fixo
      style={{ height: '100vh' }} // Mantém altura completa da tela
    >
      <div className="flex flex-col p-4">
        <div className={`flex flex-col ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="flex flex-col mb-6">
            <div className="flex items-center justify-start gap-x-2 text-primary-light mt-2">
              <MdEngineering className='md:h-7 md:w-7' />
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
              className="text-primary-light flex items-center gap-x-2"
              onClick={toggleSidebar}
            >
              {/* Ícone de menu sanduíche quando o menu está colapsado */}
              {isCollapsed ? (
                <FaBars size={15} />
              ) : (
                <>
                  <FaBars size={15} />
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
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `flex items-center text-primary-light gap-x-4 border-b px-4 py-4 hover:bg-blue-200 ${isActive ? 'bg-blue-700 text-white hover:text-primary-light' : ''}`
            }>
            <MdOutlineDashboard />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink 
            to="/form" 
            className={({ isActive }) => 
              `flex items-center text-primary-light gap-x-4 border-b px-4 py-4 hover:bg-blue-200  ${isActive ? 'bg-blue-700 text-white hover:text-primary-light' : ''}`
            }>
            <FaFilePen />
            {!isCollapsed && <span>Cadastrar OS</span>}
          </NavLink>

          <NavLink 
            to="/listing" 
            className={({ isActive }) => 
              `flex items-center text-primary-light gap-x-4 border-b px-4 py-4 hover:bg-blue-200  ${isActive ? 'bg-blue-700 text-white hover:text-primary-light' : ''}`
            }>
            <FaRegListAlt />
            {!isCollapsed && <span>Lista de OS</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
