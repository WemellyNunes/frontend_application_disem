import { useState } from "react";

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
    const filteredData = data.filter((item) => {
        switch (activeTab) {
            case 'Abertas':
                return item.status === 'A atender';
            case 'Programadas':
                return item.status === 'Em atendimento';
            case 'Resolvidas':
                return item.status === 'Resolvido';
            case 'Finalizadas':
                return item.status === 'Finalizada';
            case 'Negadas':
                return item.status === 'Negada';
            default:
                return true;
        }
    });

    const getStatusClasses = (status) => {
        switch (status) {
            case 'A atender':
                return ' text-orange-500 bg-orange-100 rounded-full';
            case 'Em atendimento':
                return 'text-blue-500 bg-blue-100 rounded-full';
            case 'Resolvido':
                return 'text-green-500 bg-green-100 rounded-full';
            case 'Finalizada':
                return 'text-blue-700 bg-blue-100 rounded-full';
            case 'Negada':
                return 'text-red-500 bg-red-100 rounded-full';
            default:
                return '';
        }
    };

    return (
        <div className="mx-4 mt-2 w-full">
            {/* Abas de navegação */}
            <nav className="flex space-x-4 border-b bg-white rounded-lg shadow">
                {['Abertas', 'Programadas', 'Resolvidas', 'Finalizadas', 'Negadas'].map((tab) => (
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

            {/* Tabela */}
            <table className="min-w-full table-auto mt-2 shadow-md">
                <thead className="font-light">
                    <tr className=" bg-white rounded- text-primary-light text-sm font-light border-b ">
                        <th className="px-4 py-6">N° Requisição</th>
                        <th className="px-4 py-6">Criação</th>
                        <th className="px-4 py-6">Origem</th>
                        <th className="px-4 py-6">Tipo de Manutenção</th>
                        <th className="px-4 py-6">Sistema</th>
                        <th className="px-4 py-6">Unidade</th>
                        <th className="px-4 py-6">Solicitante</th>
                        <th className="px-4 py-6">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={item.id} className={`text-center text-sm hover:bg-blue-50 text-primary-dark ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <td className="px-2 py-3">{item.requisicao}</td>
                                <td className="p-2">{item.criacao}</td>
                                <td className="p-2">{item.origem}</td>
                                <td className="p-2">{item.tipo}</td>
                                <td className="p-2">
                                    <a href="#" className="text-blue-500 underline">{item.sistema}</a>
                                </td>
                                <td className="p-2">{item.unidade}</td>
                                <td className="p-2">{item.solicitante}</td>
                                <td className="p-2">
                                    <div className={` py-2 ${getStatusClasses(item.status)} `}>
                                        {item.status}
                                    </div>
                                </td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="p-2 text-center">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TabsAndTable;