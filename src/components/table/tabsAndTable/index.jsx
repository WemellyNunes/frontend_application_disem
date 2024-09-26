import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../tabs';
import Table from '../table';
import SearchInput from '../../inputs/searchInput';
import FilterModal from '../../modal/filter';
import MessageBox from '../../box/message';
import Tag from '../../tag';
import { FiFilter } from "react-icons/fi";


const data = [
    { id: 1, requisicao: '90000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'SANITARIO', unidade: 'UNIDADE X', solicitante: 'JOAO DA SILVA COSTA', status: 'A atender', programada: false },
    { id: 2, requisicao: '15230', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'SANITARIO', unidade: 'UNIDADE II', solicitante: 'ANA DA SILVA COSTA', status: 'A atender', programada: false },
    { id: 3, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE II', solicitante: 'ANA DA SILVA COSTA', status: 'Em atendimento', programada: true },
    { id: 4, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Resolvido', programada: true },
    { id: 5, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false }
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
    const [showMessageBox, setShowMessageBox] = useState(false);
    const navigate = useNavigate();

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
            return updatedFilters;
        });
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
                item.sistema.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (appliedFilters) {
            if (appliedFilters.requisicao) {
                filtered = filtered.filter(item => item.requisicao.includes(appliedFilters.requisicao));
            }
            if (appliedFilters.solicitante) {
                filtered = filtered.filter(item => item.solicitante.toLowerCase().includes(appliedFilters.solicitante.toLowerCase()));
            }
            if (appliedFilters.unidade && appliedFilters.unidade.length > 0) {
                filtered = filtered.filter(item =>
                    appliedFilters.unidade.some(unit => item.unidade.toLowerCase().includes(unit.toLowerCase()))
                );
            }
            if (appliedFilters.tipoManutencao) {
                filtered = filtered.filter(item => item.tipo.toLowerCase().includes(appliedFilters.tipoManutencao.toLowerCase()));
            }
            if (appliedFilters.sistemas && appliedFilters.sistemas.length > 0) {
                filtered = filtered.filter(item =>
                    appliedFilters.sistemas.some(system => item.sistema.toLowerCase().includes(system.toLowerCase()))
                );
            }
            if (appliedFilters.origem) {
                filtered = filtered.filter(item => item.origem.toLowerCase().includes(appliedFilters.origem.toLowerCase()));
            }
        }

        return filtered;
    };



    const memoizedFilteredData = useMemo(filterData, [appliedFilters, searchTerm, osData, activeTab]);

    useEffect(() => {
        setFilteredData(memoizedFilteredData);

        if (memoizedFilteredData.length === 0) {
            setShowMessageBox(true);
        } else {
            setShowMessageBox(false);
        }
    }, [memoizedFilteredData]);

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
        <div className="mx-4 mt-1 w-full">
            <div className='flex mx-1.5 md:mx-0 gap-x-2 '>
                <SearchInput placeholder="Buscar..." onSearch={handleSearch} />
                <button
                    onClick={() => setIsFilterModalOpen(true)}
                    className="flex items-center gap-2 bg-primary-light text-white px-4 h-9 rounded hover:bg-blue-600"
                >
                    <FiFilter size={15} />
                    Filtrar
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-1.5">
                {Object.keys(appliedFilters).map((filterKey) => (
                    appliedFilters[filterKey].length > 0 && (
                        Array.isArray(appliedFilters[filterKey]) ? (
                            appliedFilters[filterKey].map((item, idx) => (
                                <Tag
                                    key={`${filterKey}-${idx}`}
                                    label={item}
                                    onRemove={() => removeFilter(filterKey, item)}
                                />
                            ))
                        ) : (
                            <Tag
                                key={filterKey}
                                label={appliedFilters[filterKey]}
                                onRemove={() => removeFilter(filterKey)}
                            />
                        ))
                ))}
            </div>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <Table filteredData={currentItems} onProgramClick={handleProgramClick} />

            <div className="flex justify-between bg-white items-center px-4 py-2 text-xs text-primary-dark">
                <div>
                    {filteredData.length} itens de {filteredData.length}
                </div>
                <div>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                        Primeira
                    </button>
                    <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                        &lt;
                    </button>
                    <span>{currentPage} de {totalPages}</span>
                    <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
                        &gt;
                    </button>
                    <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                        Última
                    </button>
                </div>
            </div>

            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onApplyFilters={handleApplyFilters}
            />

            {showMessageBox && (
                <MessageBox
                    type="error"
                    title="Erro:"
                    message="Nenhum resultado encontrado para os filtros aplicados."
                    onClose={() => setShowMessageBox(false)}
                />
            )}
        </div>
    );
};

export default TabsAndTable;
