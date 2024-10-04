import { MdEngineering } from "react-icons/md";

const Header = () => {
    return (
      <header className="bg-white px-4 py-3 md:py-4 flex items-center shadow-sm fixed w-full top-0 z-50 gap-x-2">
         <MdEngineering className="text-primary-light h-7 w-7  md:h-9 md:w-9" />
        <div>
          <h1 className="text-primary-dark text-sm  md:text-base font-medium">DISEM</h1>
          <p className="text-xs md:text-sm text-primary-dark">Divisão de Serviços de Engenharia e Manutenção</p>
        </div>
      </header>
    );
  };

  export default Header;