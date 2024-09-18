import { FaCirclePlus,  FaRegClock} from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { useState } from "react";
import HistoryCard from "../../cards/historyCard";
import ActionsMenu from "../../verticalMenu/actionMenu";
import ConfirmationModal from "../../modal/confirmation";

const Row = ({ item, index, onProgramClick }) => {
    const [showHistory, setShowHistory] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [actionType, setActionType] = useState(null);
    
    const statusClasses = {
        'A atender': 'font-medium text-status-open bg-status-bgOpen rounded-full p-1',
        'Em atendimento': 'font-medium  text-status-prog bg-status-bgProg rounded-full p-1',
        'Resolvido': 'font-medium text-status-resp bg-status-bgResp rounded-full p-1',
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
            <tr className={`text-center text-xs md:text-sm hover:bg-blue-50 text-primary-dark ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-2 py-3">{item.requisicao}</td>
                <td className="p-2">{item.criacao}</td>
                <td className="p-2">{item.origem}</td>
                <td className="p-2">{item.tipo}</td>
                <td className="p-2">{item.sistema}</td>
                <td className="p-2">{item.unidade}</td>
                <td className="p-2">{item.solicitante}</td>
                <td className="p-2">
                    <button onClick={() => onProgramClick(item.id)} className="flex w-full flex-col text-primary-dark items-center justify-center hover:underline">
                        {item.programada ? (
                            <>
                                Programada
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
                <td className="p-2">
                    <button onClick={() => setShowHistory(true)} className="flex w-full flex-col text-primary-dark items-center justify-center hover:underline">
                        <div className="text-primary-light" ><MdHistory size={20} /></div>
                    </button>
                </td>
                <td className="p-2">
                    <div className={`py-2 ${statusClasses[item.status]}`}>
                        {item.status}
                    </div>
                </td>
                <td className="p-2">
                    <ActionsMenu onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />

                    {showConfirmation && (
                <ConfirmationModal
                    title={actionType === 'delete' ? "Confirmar Exclusão" : "Confirmar Edição"}
                    message={`Tem certeza que deseja ${actionType === 'delete' ? "excluir" : "editar"} a OS ${item.id}?`}
                    onConfirm={handleConfirmAction}
                    onCancel={() => setShowConfirmation(false)}
                />
            )}
                </td>
            </tr>

            {showHistory && <HistoryCard history={history} onClose={() => setShowHistory(false)} />}
        </>
    );
};

export default Row;                                              