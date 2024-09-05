import { MdEngineering } from "react-icons/md";

const Header = () => {
    return (
      <header className="bg-white p-4 flex items-center shadow-md fixed w-full top-0 z-50">
         <MdEngineering size={45} className="text-primary-light mr-4" />
        <div>
          <h1 className="text-primary-dark text-xl font-semibold">DISEM</h1>
          <p className="hidden md:block text-sm text-primary-dark">Divisão de Serviços de Engenharia e Manutenção</p>
        </div>
      </header>
    );
  };

  export default Header;