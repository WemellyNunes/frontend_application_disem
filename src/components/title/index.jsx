const PageTitle = ({ icon: Icon, text }) => {
    return (
      <div className="w-full bg-primary-light text-white flex items-center px-4 h-12 mt-3 rounded-md shadow-md">
        <Icon className="h-5 w-5 mr-3" />
        <h1 className="text-base font-medium">{text}</h1>
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