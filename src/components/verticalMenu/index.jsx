import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaEdit, FaClock, FaListAlt, FaCalendarAlt } from 'react-icons/fa'; // Exemplo de ícones

const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: FaEdit, text: 'Cadastrar OS' },
    { icon: FaClock, text: 'Programar OS' },
    { icon: FaListAlt, text: 'Lista de OS' },
    { icon: FaCalendarAlt, text: 'Manutenção Preventiva' },
  ];

  return (
    <div className={`bg-white h-screen shadow-md ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-end p-4 text-blue-600"
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        <span className={`ml-2 font-bold ${isOpen ? '' : 'hidden'}`}>Ocultar Menu</span>
      </button>
      <ul className="mt-2">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
            <item.icon className="text-blue-600 h-5 w-5" />
            <span className={`ml-4 text-blue-600 ${isOpen ? '' : 'hidden'}`}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalMenu;




/*
import { NavLink } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaEdit, FaClock, FaListAlt, FaCalendarAlt } from 'react-icons/fa';


const VerticalMenu = ({ isOpen, toggleMenu }) => {
    const menuItems = [
      { path: '#', icon: FaEdit, text: 'Cadastrar OS' },
      { path: '#', icon: FaClock, text: 'Programar OS' },
      { path: '#', icon: FaListAlt, text: 'Lista de OS' },
      { path: '#', icon: FaCalendarAlt, text: 'Manutenção Preventiva' },
    ];
  
    return (
      <div className={`bg-white h-screen shadow-md ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
        <button
          onClick={toggleMenu}
          className="flex items-center justify-end p-4 text-primary-light"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
          <span className={`ml-2 font-bold ${isOpen ? '' : 'hidden'}`}>Ocultar Menu</span>
        </button>
        <ul className="mt-2"> 
          {menuItems.map((item, index) => (
           <li key={index} className="flex items-center">
             <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-4 w-full hover:bg-gray-100 cursor-pointer ${isActive ? 'bg-gray-300' : ''}`}
              >
                <item.icon className="text-primary-light h-5 w-5" />
                <span className={`ml-4 text-primary-light ${isOpen ? '' : 'hidden'}`}>{item.text}</span>
              </NavLink> 
            </li> 
          ))}
        </ul>
      </div>
    );
  };
  
  export default VerticalMenu; */