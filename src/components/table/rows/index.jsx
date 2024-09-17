import { FaCirclePlus } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { useState } from "react";
import HistoryCard from "../../cards/historyCard";


const Row = ({ item, index, onProgramClick }) => {
    const [showHistory, setShowHistory] = useState(false);

    const statusClasses = {
        'A atender': 'font-medium text-status-open bg-status-bgOpen rounded-full',
        'Em atendimento': 'font-medium  text-status-prog bg-status-bgProg rounded-full',
        'Resolvido': 'font-medium text-status-resp bg-status-bgResp rounded-full',
        'Finalizada': 'font-medium text-status-finish bg-status-bgFinish rounded-full',
        'Negada': 'font-medium text-status-negative bg-status-bgNegative rounded-full'
    };

    const history = [
        `OS Nº ${item.requisicao} Criada em 00/00/0000 agente: Fulano da Silva `,
        `OS Nº ${item.requisicao} Editada em 00/00/0000 agente: Fulano da Silva`,
        `OS Nº ${item.requisicao} Programada em 00/00/0000 agente: Fulano da Silva`
    ];

    return (
        <>
            <tr className={`text-center text-sm hover:bg-blue-50 text-primary-dark ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-2 py-3">{item.requisicao}</td>
                <td className="p-2">{item.criacao}</td>
                <td className="p-2">{item.origem}</td>
                <td className="p-2">{item.tipo}</td>
                <td className="p-2">{item.sistema}</td>
                <td className="p-2">{item.unidade}</td>
                <td className="p-2">{item.solicitante}</td>
                <td className="p-2">
                    <button onClick={() => onProgramClick(item.id)} className="flex w-full flex-col text-primary-dark items-center justify-center hover:underline">
                        {item.programada ? 'Programada' : 'Sem programação'}
                        <div className="text-primary-light">
                            <FaCirclePlus />
                        </div>
                    </button>
                </td>
                <td className="p-2">
                    <button onClick={() => setShowHistory(true)} className="flex w-full flex-col text-primary-dark items-center justify-center hover:underline">
                        {/* Ícone ou texto para Histórico */}
                        <span>Histórico</span>
                        <span className="text-primary-light" ><MdHistory /></span>
                    </button>
                </td>
                <td className="p-2">
                    <div className={`py-2 ${statusClasses[item.status]}`}>
                        {item.status}
                    </div>
                </td>
            </tr>

            {showHistory && <HistoryCard history={history} onClose={() => setShowHistory(false)} />}
        </>
    );
};

export default Row;                                              