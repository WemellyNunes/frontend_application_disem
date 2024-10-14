import { useState } from "react";
import InputUpload from "../../inputs/inputUpload";
import InputPrimary from "../../inputs/inputPrimary";
import ButtonPrimary from "../../buttons/buttonPrimary";
import ButtonSecondary from "../../buttons/buttonSecondary";
import Checklist from "../../checklist";

const MaintenanceSection = ({ orderServiceData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [descriptionBefore, setDescriptionBefore] = useState('');

    const options = [
        { label: 'Manutenção corretiva', value: 'corretiva' },
        { label: 'Manutenção preventiva', value: 'preventiva' },
    ];

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

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

    // Verifica o tipo de manutenção na OS
    const isCorrective = maintenanceType === 'corretiva';
    const isPreventive = maintenanceType === 'preventiva';

    return (
        <div className="flex flex-col bg-white rounded mb-2 mt-2 shadow">
            <div className="flex justify-between rounded items-center px-4 md:px-6 py-4 cursor-pointer bg-white" onClick={toggleSection}>
                <h3 className="text-sm md:text-base font-normal text-primary-light">Manutenção</h3>
                <span>{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
                <div className="px-4 md:px-6">
                    {/* Exibir checklist apenas se for manutenção preventiva */}
                    {isPreventive && (
                        <div>
                            <div className="font-normal text-sm md:text-sm text-primary-dark pb-2">
                                <span>Checklist - Manutenção preventiva</span>
                            </div>
                            <div className="border rounded p-2 mb-4">
                                <Checklist
                                    disciplines={disciplines}
                                    services={services}
                                    onChange={(selectedDisciplines, selectedServices) => {
                                        console.log(selectedDisciplines, selectedServices);
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    <div className="mb-4">
                        <p className="text-xs md:text-sm text-primary-dark mb-2">Imagens - antes da manutenção</p>
                        <InputUpload
                            label="Anexar arquivo(s)"
                        />
                    </div>
                    <div className="mb-4">
                        <p className="text-xs md:text-sm text-primary-dark mb-2">Imagens - pós manutenção</p>
                        <InputUpload
                            label="Anexar arquivo(s)"
                        />
                    </div>
                    <div>
                        <InputPrimary
                            label="Observação"
                            placeholder="Escreva uma observação (opcional)"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-end">
                        <div className="flex flex-col pb-4 md:flex-row gap-y-1.5 ">
                            <ButtonSecondary>Cancelar</ButtonSecondary>
                            <ButtonPrimary>Salvar</ButtonPrimary>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MaintenanceSection;
