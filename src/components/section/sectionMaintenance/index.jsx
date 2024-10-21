import { useState } from "react";
import InputUpload from "../../inputs/inputUpload";
import InputPrimary from "../../inputs/inputPrimary";
import ButtonPrimary from "../../buttons/buttonPrimary";
import ButtonSecondary from "../../buttons/buttonSecondary";
import Checklist from "../../checklist";
import MessageBox from "../../box/message";

const MaintenanceSection = ({ orderServiceData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(true); // Controla se os campos estão em modo edição
    const [formData, setFormData] = useState({
        checklistType: [],
        observation: '',
        filesBefore: [],
        filesAfter: [],
    });
    const [emptyFields, setEmptyFields] = useState({});
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageContent, setMessageContent] = useState({ type: '', title: '', message: '' });

    const disciplines = ['Piso', 'Esquadraria', 'Pluvial', 'Estrutura'];
    const services = [
        'Tipo de serviço realizado 1',
        'Tipo de serviço realizado 2',
        'Tipo de serviço realizado 3',
        'Tipo de serviço realizado 4',
        'Tipo de serviço realizado 5',
        'Tipo de serviço realizado 6',
    ];

    const dadoOS = orderServiceData;
    const maintenanceType = dadoOS.tipoManutencao.toLowerCase();
    const isPreventive = maintenanceType === 'preventiva';

    const handleFieldChange = (field) => (value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const validateFields = () => {
        const newEmptyFields = {};
        
        if (isPreventive && formData.checklistType.length === 0) newEmptyFields.checklistType = true;
        if (isPreventive && formData.filesBefore.length === 0) newEmptyFields.filesBefore = true; 
        if (isPreventive && formData.filesAfter.length === 0) newEmptyFields.filesAfter = true; 

        setEmptyFields(newEmptyFields);
        return Object.keys(newEmptyFields).length === 0;
    };

    const handleSave = () => {
        if (!validateFields()) {
            setMessageContent({ type: 'error', title: 'Erro.', message: 'Por favor, preencha todos os campos obrigatórios.' });
            setShowMessageBox(true);
            setTimeout(() => setShowMessageBox(false), 1500);
            return;
        }

        setIsEditing(false); // Desabilita os campos
        setMessageContent({ type: 'success', title: 'Sucesso.', message: 'Dados da manutenção salvos com sucesso!' });
        setShowMessageBox(true);
        setTimeout(() => setShowMessageBox(false), 1500);
    };

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col bg-white rounded mb-2 mt-2 shadow">
            <div className="flex justify-between rounded items-center px-4 md:px-6 py-4 cursor-pointer bg-white" onClick={toggleSection}>
                <h3 className="text-sm md:text-base font-normal text-primary-light">Manutenção</h3>
                <span>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
                <div className="px-4 md:px-6">
                    {isPreventive && (
                        <div className={`border rounded p-2 mb-4 ${emptyFields.checklistType ? 'border-red-500' : ''}`}>
                            <div className="font-normal text-sm md:text-sm text-primary-dark pb-2">
                                <span>Checklist - Manutenção preventiva</span>
                            </div>
                            <Checklist
                                disciplines={disciplines}
                                services={services}
                                onChange={(selectedDisciplines, selectedServices) => {
                                    if (isEditing) {
                                        handleFieldChange('checklistType')(selectedDisciplines);
                                    }
                                }}
                                disabled={!isEditing} // Desabilita os checkboxes se não estiver em edição
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <p className="text-xs md:text-sm text-primary-dark mb-2">Imagens - antes da manutenção</p>
                        <InputUpload
                            label="Anexar arquivo(s)"
                            onFilesUpload={(files) => handleFieldChange('filesBefore')(files)}
                            className={emptyFields.filesBefore ? 'border-red-500' : ''}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="mb-4">
                        <p className="text-xs md:text-sm text-primary-dark mb-2">Imagens - pós manutenção</p>
                        <InputUpload
                            label="Anexar arquivo(s)"
                            onFilesUpload={(files) => handleFieldChange('filesAfter')(files)}
                            className={emptyFields.filesAfter ? 'border-red-500' : ''}
                            disabled={!isEditing}
                        />
                    </div>
                    <div>
                        <InputPrimary
                            label="Observação"
                            placeholder="Escreva uma observação (opcional)"
                            value={formData.observation}
                            onChange={handleFieldChange('observation')}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-end">
                        <div className="flex flex-col pb-4 md:flex-row gap-y-1.5 ">
                            {isEditing ? (
                                <>
                                    <ButtonSecondary onClick={() => setIsOpen(false)}>Cancelar</ButtonSecondary>
                                    <ButtonPrimary onClick={handleSave}>Salvar</ButtonPrimary>
                                </>
                            ) : (
                                <>
                                    <ButtonSecondary onClick={() => setIsEditing(true)}>Editar</ButtonSecondary>
                                    <ButtonPrimary>Encerrar</ButtonPrimary>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
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

export default MaintenanceSection;
