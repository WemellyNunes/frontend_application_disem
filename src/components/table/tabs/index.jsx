const Tabs = ({ activeTab, setActiveTab }) => {
    
    const tabs = ['Abertas', 'Programadas', 'Resolvidas', 'Finalizadas', 'Negadas'];

    return (
        <nav className="flex space-x-4 border-b bg-white rounded-lg overflow-x-auto mx-1.5 md:mx-0 font-normal text-sm md:text-base">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 md:px-4 py-4  ${activeTab === tab
                            ? 'border-b-2 border-primary-light text-primary-light'
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