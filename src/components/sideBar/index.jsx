import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa"; // Ícone de menu sanduíche

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`flex flex-col w- h-screen bg-white shadow  fixed  
                  ${isCollapsed ? ' w-14 '  : 'w-64'}  transform`}
      style={{ height: '100vh' }} // Mantém altura completa da tela
    >
      <div className="flex flex-col p-4">
        <div className={`flex flex-col`}>
          <div className="flex flex-col">
            <div className="flex items-center justify-start gap-x-4 text-primary-light mt-2">
            <button
              className="text-primary-light"
              onClick={toggleSidebar}
            >
                <FaBars className='h-5 w-5' />
            </button>
                <span className={`text-lg font-semibold text-primary-light ${isCollapsed ? 'hidden' : ''}`}>
                  E.M System
                </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        {/* Menu Options */}
        <div className="flex flex-col">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `flex items-center text-primary-light gap-x-4 border-b px-4 py-4 hover:bg-blue-200 ${isActive ? 'bg-blue-700 text-white hover:text-primary-light' : ''}`
            }>
            <MdOutlineDashboard className='h-5 w-5' />
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Dashboard</span>
          </NavLink>

          <NavLink 
            to="/form" 
            className={({ isActive }) => 
              `flex items-center text-primary-light gap-x-4 border-b px-4 py-4 hover:bg-blue-200 ${isActive ? 'bg-blue-700 text-white hover:text-primary-light' : ''}`
            }>
            <FaFilePen className='h-5 w-5'/>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Cadastrar</span>
          </NavLink>

          <NavLink 
            to="/listing" 
            className={({ isActive }) => 
              `flex items-center text-primary-light gap-x-4 border-b px-4 py-4 hover:bg-blue-200 ${isActive ? 'bg-blue-700 text-white hover:text-primary-light' : ''}`
            }>
            <FaRegListAlt className='h-5 w-5'/>
            <span className={`${isCollapsed ? 'hidden' : ''}`}>Lista</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
