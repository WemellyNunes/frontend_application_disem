import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../tabs';
import Table from '../table';

const data = [
    { id: 1, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  },
    { id: 2, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  },
    { id: 3, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Em atendimento', programada: true },
    { id: 4, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Resolvido', programada: true },
    { id: 5, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  },
    { id: 6, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  },
    { id: 7, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  },
    { id: 8, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  }
];

const TabsAndTable = () => {
    const [osData, setOsData] = useState(data); 
    const [activeTab, setActiveTab] = useState('Abertas');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const navigate = useNavigate();

    const handleProgramClick = (id) => {
        navigate(`/programing/${id}`); 

        const updatedData = osData.map((item) =>
            item.id === id ? { ...item, status: 'Em atendimento', programada: true } : item
        );
        setOsData(updatedData);
    };

    const filterData = () => {
        const statusMap = {
            'Abertas': 'A atender',
            'Programadas': 'Em atendimento',
            'Resolvidas': 'Resolvido',
            'Finalizadas': 'Finalizada',
            'Negadas': 'Negada'
        };

        return osData.filter(item => item.status === statusMap[activeTab]);
    };

    const filteredData = filterData();
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Resetar para a primeira página
    };

    return (
        <div className="mx-4 mt-1 w-full">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <Table filteredData={currentItems} onProgramClick={handleProgramClick} />
            
            {/* Footer para Paginação */}
            <div className="flex justify-between  bg-white items-center px-4 py-2 text-xs text-primary-dark">
                {/* Contador de itens */}
                <div>
                    {filteredData.length} itens de {filteredData.length}
                </div>
                
                {/* Limite de itens por página */}
                <div>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>

                {/* Navegação entre páginas */}
                <div>
                    <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                        &lt;
                    </button>
                    <span>{currentPage} de {totalPages}</span>
                    <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabsAndTable;