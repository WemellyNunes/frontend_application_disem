import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBars, FaSolarPanel, FaUserCircle } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaUsersRectangle, FaUsersLine, FaListUl } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";


import { useState, useEffect } from "react";
import ConfirmationModal from "../modal/confirmation";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userSession");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);


  const getRoleName = (role) => {
    const roles = {
      0: "Administrador",
      1: "Colaborador I",
      2: "Colaborador II",
      3: "Usuário",
    };
    return roles[role] || "Desconhecido";
  };


  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={`hidden md:flex flex-col h-1/2 md:h-full bg-secondary-dark  border-r  md:fixed transition-all duration-300 z-50 ${isCollapsed ? 'w-12 md:w-14' : 'w-60'} transform`}>
        <div className="flex flex-col p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-start  text-primary-dark mt-2">
              <button
                className="text-white"
                onClick={toggleSidebar}
              >
                <FaBars className='h-4 w-4' />
              </button>
              <span className={`transition-all duration-300 ease-in-out transform text-sm md:text-base font-semibold text-white ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-4'}`}>
                NomeSistema
              </span>
            </div>
          </div>
        </div>

        <div className={`mt-2 ${isCollapsed ? 'opacity-0 translate-x-[-10px] hidden' : ''}`}>
          <div className="flex flex-row items-center py-4 px-4 gap-x-4">
            <FaUserCircle className='h-9 w-9 text-white' />
            <div className="flex flex-col text-white">
              <p className="text-sm font-medium">
                {userData?.nome
                  ? (() => {
                    const nomeArray = userData.nome.split(" ");
                    return nomeArray.length > 1
                      ? `${nomeArray[0]} ${nomeArray[nomeArray.length - 1]}` 
                      : nomeArray[0]; 
                  })()
                  : "Usuário Desconhecido"}
              </p>

              <p className="text-sm">{getRoleName(userData?.papel)}</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-col">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center border-bgreen-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 ${isActive ? 'bg-white text-primary-dark hover:text-primary-dark' : 'text-white'}`
              }>
              <MdOutlineDashboard className='h-4 w-5' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-2'
                  }`}
              >
                Dashboard
              </span>
            </NavLink>

            <span className={`text-xs text-gray-200  font-medium mt-6 mb-2 px-2 ${isCollapsed ? 'opacity-0 translate-x-[-10px] hidden' : ''} `}>SERVIÇO</span>

            <NavLink
              to="/formulario"
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <LiaClipboardListSolid className='h-5 w-5' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-2'
                  }`}
              >
                Cadastrar
              </span>
            </NavLink>

            <NavLink
              to="/filas"
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <FaListUl className='h-5 w-4' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-2.5'
                  }`}
              >
                Filas
              </span>
            </NavLink>

            <span className={`text-xs text-gray-200  font-medium mt-6 mb-2 px-2 ${isCollapsed ? 'opacity-0 translate-x-[-10px] hidden' : 'opacity-100 translate-x-0 w-auto'} `}>PESSOAS</span>

            <NavLink
              to="/equipe"
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <FaUsersLine className='h-5 w-5' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-2.5'
                  }`}
              >
                Equipe
              </span>
            </NavLink>

            <NavLink
              to="/usuarios"
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <FaUsersRectangle className='h-5 w-5' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-2.5'
                  }`}
              >
                Usuários
              </span>
            </NavLink>



            <span className={`text-xs text-gray-200  font-medium mt-6 mb-2 px-2 ${isCollapsed ? 'opacity-0 translate-x-[-10px] hidden' : 'opacity-100 translate-x-0 w-auto'} `}>INFRAESTRUTURA</span>

            <NavLink
              to="/infraestrutura"
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <ImOffice className='h-4 w-4' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-2.5'
                  }`}
              >
                Unidades/institutos
              </span>
            </NavLink>

            <span className={`text-xs text-gray-200  font-medium mt-6 mb-2 px-2 ${isCollapsed ? 'opacity-0 translate-x-[-10px] hidden' : 'opacity-100 translate-x-0 w-auto'} `}>MATERIAL</span>

            <NavLink
              to="/503"
              onClick={(e) => e.preventDefault()}
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 cursor-not-allowed ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <BsCart4 className='h-4 w-4' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-4'
                  }`}
              >
                Almoxerifado
              </span>
            </NavLink>


            <NavLink
              to="/503"
              onClick={(e) => e.preventDefault()}
              className={({ isActive }) =>
                `flex items-center text-primary-dark border-b border-green-900 px-4 py-4 hover:bg-green-200 hover:text-gray-700 cursor-not-allowed ${isActive ? 'bg-white text-gray-700 hover:text-primary-dark' : 'text-white'}`
              }>
              <FaSolarPanel className='h-4 w-4' />
              <span
                className={`transition-all duration-300 ease-in-out text-sm transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto pl-4'
                  }`}
              >
                Equipamentos
              </span>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 mt-auto cursor-pointer text-white hover:bg-green-200 hover:text-gray-700" onClick={handleLogoutClick}>
          <RiLogoutCircleRLine className="h-4 w-4" />
          <span
            className={`font-medium transition-all text-sm duration-300 ease-in-out transform ${isCollapsed ? 'opacity-0 translate-x-[-10px] text-sm w-0 overflow-hidden' : 'opacity-100 translate-x-0 w-auto ml-2'
              }`}
          >
            Sair
          </span>
        </div>

      </div>
      {
        showModal && (
          <ConfirmationModal
            title="Confirmação de saida"
            message="Tem certeza que deseja sair?"
            onConfirm={handleConfirmLogout}
            onCancel={handleCancelLogout}
          />
        )
      }
    </>


  );
};

export default Sidebar;
