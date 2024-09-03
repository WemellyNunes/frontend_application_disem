const PageTitle = ({ icon: Icon, text, backgroundColor, textColor, children}) => {
    return (
      <div className={`w-full ${backgroundColor} ${textColor} flex items-center px-4 h-12 mt-2 rounded-md shadow-md`}>
        <Icon className="h-5 w-5 mr-3" />
        <h1 className="text-base font-medium">{text}</h1>
        <div className="ml-auto">{children}</div>
      </div>
    );
  };

  export default PageTitle;


  /*
    COMO USAR:

    <div className="flex w-full justify-center px-4">
          <PageTitle
            icon={FaCalendarAlt}
            text="Programação de Ordem de Serviço" />
     </div>
  */