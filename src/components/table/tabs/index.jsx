const Tabs = ({ activeTab, setActiveTab }) => {
    
    const tabs = ['Abertas', 'Programadas', 'Resolvidas', 'Finalizadas', 'Negadas'];

    return (
        <nav className="flex space-x-4 border-b bg-white rounded-lg shadow">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-4 ${activeTab === tab
                            ? 'border-b-2 border-primary-light text-primary-light'
                            : 'text-gray-600'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </nav>
    );
};

export default Tabs;