import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../tabs';
import Table from '../table';
import SearchInput from '../../inputs/searchInput';
import FilterModal from '../../modal/filter';
import Tag from '../../tag';
import { FaSlidersH } from "react-icons/fa";

const data = [
    { id: 1, requisicao: '90000', criacao: '27/09/2024', origem: 'DISEM', tipo: 'CORRETIVA', sistema: 'HIDROSANITARIO', unidade: 'IGE', solicitante: 'JOAO DA SILVA COSTA', status: 'A atender', programada: false, prioridade: 'Execução em até 7 dias' },
    { id: 2, requisicao: '15230', criacao: '30/09/2024', origem: 'DISEM', tipo: 'CORRETIVA', sistema: 'HIDROSANITARIO', unidade: 'ICH', solicitante: 'ANA DA SILVA COSTA', status: 'A atender', programada: false, prioridade: 'Execução em até 15 dias' },
    { id: 3, requisicao: '00000', criacao: '24/09/2024', origem: 'DISEM', tipo: 'CORRETIVA', sistema: 'CIVIL', unidade: 'ICE', solicitante: 'ANA DA SILVA COSTA', status: 'Em atendimento', programada: true, prioridade: 'Execução em até 2 dias' },
    { id: 4, requisicao: '00000', criacao: '30/09/2024', origem: 'DISEM', tipo: 'CORRETIVA', sistema: 'CIVIL', unidade: 'ICE', solicitante: 'FULANO DA SILVA COSTA', status: 'Resolvido', programada: true, prioridade: 'Execução em até 7 dias' },
    { id: 5, requisicao: '00000', criacao: '01/10/2024', origem: 'SIPAC', tipo: 'CORRETIVA', sistema: 'CIVIL', unidade: 'CTIC', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false, prioridade: 'Execução em até 2 dias' },
    { id: 6, requisicao: '90000', criacao: '27/09/2024', origem: 'DISEM', tipo: 'CORRETIVA', sistema: 'HIDROSANITARIO', unidade: 'IGE', solicitante: 'JOAO DA SILVA COSTA', status: 'A atender', programada: false, prioridade: 'Execução Imediata' },
    { id: 7, requisicao: '90000', criacao: '01/10/2024', origem: 'DISEM', tipo: 'CORRETIVA', sistema: 'ELETRICO', unidade: 'IGE', solicitante: 'JOAO DA SILVA COSTA', status: 'A atender', programada: false, prioridade: 'Execução Imediata' }
];

const TabsAndTable = () => {
    const [osData, setOsData] = useState(data);
    const [activeTab, setActiveTab] = useState('Abertas');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({});
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFilters = localStorage.getItem('appliedFilters');
        if (savedFilters) {
            setAppliedFilters(JSON.parse(savedFilters));
        }
    }, []);

    const handleProgramClick = (id) => {
        navigate(`/programing/${id}`);

        const updatedData = osData.map((item) =>
            item.id === id ? { ...item, status: 'Em atendimento', programada: true } : item
        );
        setOsData(updatedData);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleApplyFilters = (filters) => {
        setAppliedFilters(filters);
        setIsFilterModalOpen(false);
        localStorage.setItem('appliedFilters', JSON.stringify(filters));
    };

    const removeFilter = (filterKey, filterValue = null) => {
        setAppliedFilters((prev) => {
            const updatedFilters = { ...prev };

            if (filterValue && Array.isArray(updatedFilters[filterKey])) {
                updatedFilters[filterKey] = updatedFilters[filterKey].filter((item) => item !== filterValue);

                if (updatedFilters[filterKey].length === 0) {
                    delete updatedFilters[filterKey];
                }
            } else {
                delete updatedFilters[filterKey];
            }

            localStorage.setItem('appliedFilters', JSON.stringify(updatedFilters));

            return updatedFilters;
        });
    };

    const prioridadesPesos = {
        'Execução Imediata': 1,
        'Execução em até 2 dias': 2,
        'Execução em até 7 dias': 3,
        'Execução em até 15 dias': 4
    };

    const filterData = () => {
        const statusMap = {
            'Abertas': 'A atender',
            'Programadas': 'Em atendimento',
            'Resolvidas': 'Resolvido',
            'Finalizadas': 'Finalizada',
            'Negadas': 'Negada'
        };

        let filtered = osData.filter(item => item.status === statusMap[activeTab]);

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.requisicao.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.solicitante.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.unidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.sistema.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.criacao.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.origem.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (appliedFilters) {
            if (appliedFilters.dataCriacao) {
                filtered = filtered.filter(item => item.criacao === appliedFilters.dataCriacao);
            }

            if (appliedFilters.unidade && appliedFilters.unidade.length > 0) {
                filtered = filtered.filter(item =>
                    appliedFilters.unidade.some(unit =>
                        item.unidade.toLowerCase().includes(unit.value.toLowerCase()))
                );
            }

            if (appliedFilters.tipoManutencao && appliedFilters.tipoManutencao.length > 0) {
                filtered = filtered.filter(item =>
                    appliedFilters.tipoManutencao.some(tipo =>
                        item.tipo.toLowerCase().includes(tipo.value.toLowerCase()))
                );
            }

            if (appliedFilters.sistemas && appliedFilters.sistemas.length > 0) {
                filtered = filtered.filter(item =>
                    appliedFilters.sistemas.some(system =>
                        item.sistema.toLowerCase().includes(system.value.toLowerCase()))
                );
            }

            if (appliedFilters.origem && appliedFilters.origem.length > 0) {
                filtered = filtered.filter(item =>
                    appliedFilters.origem.some(origin =>
                        item.origem.toLowerCase().includes(origin.value.toLowerCase()))
                );
            }
        }

        // Ordenar pela prioridade com base na criticidade
        filtered = filtered.sort((a, b) => {
            return prioridadesPesos[a.prioridade] - prioridadesPesos[b.prioridade];
        });

        return filtered;
    };


    const memoizedFilteredData = useMemo(filterData, [appliedFilters, searchTerm, osData, activeTab]);

    useEffect(() => {
        setFilteredData(memoizedFilteredData);
    }, [memoizedFilteredData, appliedFilters, activeTab]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="flex w-full  flex-col mt-1"> {/* w-full para ocupar 100% da largura */}
            <div className='flex flex-row gap-x-2 '>
                <SearchInput placeholder="Buscar..." onSearch={handleSearch} />
                <button
                    onClick={() => setIsFilterModalOpen(true)}
                    className="flex items-center gap-2 bg-white text-primary-light border border-primary-light px-3 md:px-4 h-9 rounded hover:bg-blue-100"
                >
                    <span>
                        <FaSlidersH size={15} />
                    </span>
                    <span className='hidden md:block'>Filtrar</span>
                </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-1.5">
                {Object.keys(appliedFilters).map((filterKey) => {
                    const filterValue = appliedFilters[filterKey];

                    // Verificar se o filtro é uma array (como os multiselects) ou um valor único
                    if (Array.isArray(filterValue)) {
                        return filterValue.map((item) => (
                            <Tag
                                key={`${filterKey}-${item.value}`} // Usar chave única
                                label={`${item.label}`} // Mostrar o nome do filtro e o valor selecionado
                                onRemove={() => removeFilter(filterKey, item)}
                            />
                        ));
                    } else {
                        return (
                            <Tag
                                key={filterKey}
                                label={`${filterKey}: ${filterValue}`}
                                onRemove={() => removeFilter(filterKey)}
                            />
                        );
                    }
                })}
            </div>

            {/* Evitar que as tabs causem overflow horizontal */}
            <div className="w-full overflow-x-auto">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Ajuste de tabela */}
            <div className="w-full">
                <Table filteredData={currentItems} onProgramClick={handleProgramClick} />
            </div>

            <div className="flex justify-between bg-white items-center mt-10 px-4 py-2 text-xs text-primary-dark">
                <div>{filteredData.length} itens de {filteredData.length}</div>
                <div>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>Primeira</button>
                    <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>&lt;</button>
                    <span>{currentPage} de {totalPages}</span>
                    <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>&gt;</button>
                    <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Última</button>
                </div>
            </div>

            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onApplyFilters={handleApplyFilters}
                appliedFilters={appliedFilters}
            />
        </div>
    );
};

export default TabsAndTable;
