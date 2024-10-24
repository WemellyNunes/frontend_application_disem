import { FaCirclePlus, FaRegClock } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { useState } from "react";
import HistoryCard from "../../cards/historyCard";
import ActionsMenu from "../../verticalMenu/actionMenu";
import ConfirmationModal from "../../modal/confirmation";
import Circle from "../circle";

const Row = ({ item, index, onProgramClick }) => {
    const [showHistory, setShowHistory] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [actionType, setActionType] = useState(null);

    const statusClasses = {
        'A atender': 'font-medium bg-status-open text-white rounded-md p-1',
        'Em atendimento': 'font-medium  text-status-prog bg-status-bgProg rounded-md p-1',
        'Resolvido': 'font-medium text-status-resp bg-status-bgResp rounded-md p-1',
        'Finalizada': 'font-medium text-status-finish bg-status-bgFinish rounded-full p-1',
        'Negada': 'font-medium text-status-negative bg-status-bgNegative rounded-full p-1      '
    };

    const history = [
        `OS Nº ${item.requisicao} Criada em 00/00/0000 agente: Fulano da Silva `,
        `OS Nº ${item.requisicao} Editada em 00/00/0000 agente: Fulano da Silva`,
        `OS Nº ${item.requisicao} Programada em 00/00/0000 agente: Fulano da Silva`
    ];

    const handleView = () => {
        console.log(`Visualizar OS ${item.id}`);
    };

    const handleEdit = () => {
        setActionType('edit');
        setShowConfirmation(true);
    };

    const handleDelete = () => {
        setActionType('delete');
        setShowConfirmation(true);
    };

    const handleConfirmAction = () => {
        setShowConfirmation(false);
        if (actionType === 'edit') {
            console.log(`Confirmar Edição da OS ${item.id}`);
            // Adicione a lógica para editar a OS aqui
        } else if (actionType === 'delete') {
            console.log(`Confirmar Exclusão da OS ${item.id}`);
            // Adicione a lógica para excluir a OS aqui
        }
    };

    return (
        <>
            <tr className={`flex flex-row items-center justify-between text-xs font-normal md:text-sm hover:bg-blue-50 text-primary-dark ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="flex p-6 justify-center items-center text-center">{item.requisicao}</td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">{item.criacao}</td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">{item.origem}</td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">{item.tipo}</td>
                <td className="p-6 justify-center items-center text-center">{item.sistema}</td>
                <td className="flex p-6 justify-center items-center text-center">{item.unidade}</td>
                <td className="hidden md:flex p-6 justify-center items-center text-center min-w-[120px]">{item.solicitante}</td>
                <td className="flex p-6 justify-center items-center text-center">
                    <button onClick={() => onProgramClick(item.id)} className="flex w-full flex-col items-center justify-center hover:underline">
                        {item.programacao ? (
                            <>
                                Programacao
                                <div className="text-primary-light">
                                    <FaRegClock />
                                </div>
                            </>
                        ) : (
                            <>
                                Sem programação
                                <div className="text-primary-light">
                                    <FaCirclePlus />
                                </div>
                            </>
                        )}
                    </button>
                </td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">
                    <button onClick={() => setShowHistory(true)} className="flex w-full flex-col items-center justify-center">
                        <div className="text-primary-light rounded-full hover:bg-status-bgProg p-1" ><MdHistory size={20} /></div>
                    </button>
                </td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">
                    <div className={`py-2 ${statusClasses[item.status]} text-center`}>
                        {item.status}
                    </div>
                </td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">
                    <div className="flex justify-center">
                        <Circle prioridade={item.prioridade} />
                    </div>
                </td>
                <td className="hidden md:flex p-6 justify-center items-center text-center">
                    <ActionsMenu onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
                </td>
            </tr>

            {showHistory && <HistoryCard history={history} onClose={() => setShowHistory(false)} />}
        </>
    );
};

export default Row;                                              