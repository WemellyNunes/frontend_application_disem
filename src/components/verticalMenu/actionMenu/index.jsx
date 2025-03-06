import { useState } from 'react';
import { GoKebabHorizontal } from "react-icons/go";
import { hasPermission, UserRoles } from '../../../utils/api/permissions';

const ActionsMenu = ({ onEdit, onDelete, onNegate, showNegate, showEdit }) => {

  const userSession = JSON.parse(sessionStorage.getItem("userSession"));


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-700 bg-gray-100 font-bold text-lg hover:text-blue-700 hover:bg-blue-100 p-1 rounded-full"
      >
        <GoKebabHorizontal />
      </button>
      {hasPermission(userSession.papel, [UserRoles.ADMIN, UserRoles.COLABORADOR_I]) &&  isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10 text-primary-dark">
          {showEdit && (
            <button
              onClick={() => {
                onEdit();
                toggleMenu();
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
            >
              Editar
            </button>
          )}

          <button
            onClick={() => {
              onDelete();
              toggleMenu();
            }}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
          >
            Excluir
          </button>

          
          {hasPermission(userSession.papel, [UserRoles.ADMIN]) && showNegate && (
            <button
              onClick={() => {
                onNegate();
                toggleMenu();
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
            >
              Negar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ActionsMenu;
