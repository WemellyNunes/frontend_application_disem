import { useState } from "react";
import Tabs from "../tabs";
import Table from "../table";

const data = [
    { id: 1, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender' },
    { id: 2, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender' },
    { id: 3, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'ELÉTRICO', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender' },
    { id: 4, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO PREVENTIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Resolvido' },
    { id: 5, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'ELÉTRICO', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Em atendimento' },
    { id: 6, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Finalizada' },
    { id: 7, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'ELÉTRICO', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Negada' },
    { id: 8, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender' },
    { id: 9, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender' },
    { id: 10, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'ELÉTRICO', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'A atender' },
    { id: 11, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO PREVENTIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Resolvido' },
    { id: 12, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'ELÉTRICO', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Em atendimento' },
    { id: 13, requisicao: '00000', criacao: '00/00/0000', origem: 'DISEM', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'CIVIL', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Finalizada' },
    { id: 14, requisicao: '00000', criacao: '00/00/0000', origem: 'SIPAC', tipo: 'MANUTENÇÃO CORRETIVA', sistema: 'ELÉTRICO', unidade: 'UNIDADE X', solicitante: 'FULANO DA SILVA COSTA', status: 'Negada' }
];


const TabsAndTable = () => {
    const [activeTab, setActiveTab] = useState('Abertas');

    // Função para filtrar os dados com base na aba ativa
    const filterData = () => {
        const statusMap = {
            'Abertas': 'A atender',
            'Programadas': 'Em atendimento',
            'Resolvidas': 'Resolvido',
            'Finalizadas': 'Finalizada',
            'Negadas': 'Negada'
        };

        return data.filter(item => item.status === statusMap[activeTab]);
    };

    const filteredData = filterData();

    return (
        <div className="mx-4 mt-2 w-full">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <Table filteredData={filteredData} />
        </div>
    );
};

export default TabsAndTable;