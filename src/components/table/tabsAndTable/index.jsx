import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../tabs';
import Table from '../table';// Importe os dados

const data = [
    { id: 1, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender', programada: false  }]

const TabsAndTable = () => {
    const [osData, setOsData] = useState(data); // Armazene o estado dos dados
    const [activeTab, setActiveTab] = useState('Abertas');
    const navigate = useNavigate();

    // Função para programar uma OS
    const handleProgramClick = (id) => {
        navigate(`/programing/${id}`); // Navegue para a página de programação

        // Aqui você pode implementar a lógica para programar a OS
        // Simular atualização da OS para programada
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

    return (
        <div className="mx-4 mt-1 w-full">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <Table filteredData={filteredData} onProgramClick={handleProgramClick} />
        </div>
    );
};

export default TabsAndTable;