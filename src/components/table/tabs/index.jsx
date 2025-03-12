const Tabs = ({ activeTab, setActiveTab }) => {
    const userSession = JSON.parse(sessionStorage.getItem("userSession"));

    const todasAsTabs = ["Abertas", "Programadas", "Atendidas", "Finalizadas", "Negadas"];
    const tabsLimitadas = ["Programadas", "Atendidas"];

    const tabs = (userSession.papel === 1 || userSession.papel === 2) ? todasAsTabs : tabsLimitadas;

    return (
        <nav className="flex w-full bg-white font-normal text-xs md:text-sm border-b border-gray-300">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 md:px-8 py-4 hover:bg-gray-100 ${
                        activeTab === tab
                            ? 'border-b-2 border-primary-light font-bold text-primary-light'
                            : 'text-primary-dark '
                    }`}
                >
                    {tab}
                </button>
            ))}
        </nav>
    );
};

export default Tabs;
