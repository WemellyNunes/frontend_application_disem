import { useState } from 'react';
import ButtonPrimary from '../../buttons/buttonPrimary';
import MessageBox from '../../box/message';
import InputPrimary from '../../inputs/inputPrimary';

const FinalizeSection = () => {
    const [finalObservation, setFinalObservation] = useState('');
    const [isSaved, setIsSaved] = useState(false);
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageContent, setMessageContent] = useState({ type: '', title: '', message: '' });
    const [isError, setIsError] = useState(false); // Novo estado para controlar erro

    const handleFieldChange = (value) => {
        setFinalObservation(value); // Atualiza o valor diretamente
        if (isError) setIsError(false); // Reseta o estado de erro se o usuário começa a digitar
    };

    // Função para validar campos
    const validateFields = () => {
        return finalObservation.trim() !== ''; // Verifica se o campo não está vazio
    };

    const handleSave = () => {
        if (!validateFields()) {
            setIsError(true); // Define erro ao tentar salvar
            setMessageContent({ type: 'error', title: 'Erro.', message: 'Por favor, preencha todos os campos obrigatórios.' });
            setShowMessageBox(true);
            setTimeout(() => setShowMessageBox(false), 1500);
            return;
        }

        setIsSaved(true);
        setMessageContent({ type: 'success', title: 'Sucesso.', message: 'Ordem de serviço salva com sucesso!' });
        setShowMessageBox(true);
        setTimeout(() => setShowMessageBox(false), 1500);
        // Chama a função de finalização passando a observação final
    };

    // Inicialmente, não há erro, então a borda será normal
    let colorBorder = isError ? 'border-red-500' : '';

    return (
        <div className="flex flex-col bg-white rounded mb-2 mt-2 shadow">
            <div className="px-4 md:px-6 py-4">
                <h3 className="text-sm md:text-base font-normal text-primary-light">Finalização da OS</h3>
                <div className="mt-4">
                    <InputPrimary
                        label="Observação final *"
                        placeholder="Escreva uma observação para finalizar a ordem de serviço"
                        value={finalObservation}
                        onChange={handleFieldChange}
                        disabled={isSaved} // Desabilita o campo após salvar
                        className={`${colorBorder} border rounded`} // Altera a borda para vermelha se houver erro
                    />
                </div>
                <div className="flex justify-end mt-4">
                    {!isSaved ? ( // Exibe o botão de finalizar se não estiver salvo
                        <ButtonPrimary onClick={handleSave}>
                            Finalizar
                        </ButtonPrimary>
                    ) : (
                        <ButtonPrimary onClick={() => {/* Implementar exportação */ }}>
                            Exportar Relatório
                        </ButtonPrimary>
                    )}
                </div>
            </div>

            {/* Exibir mensagem de erro ou sucesso */}
            {showMessageBox && (
                <MessageBox
                    type={messageContent.type}
                    title={messageContent.title}
                    message={messageContent.message}
                    onClose={() => setShowMessageBox(false)}
                />
            )}
        </div>
    );
};

export default FinalizeSection;
