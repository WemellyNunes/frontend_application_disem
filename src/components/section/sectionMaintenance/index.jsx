import { useState } from "react";
import InputSelect from "../../inputs/inputSelect";
import InputUpload from "../../inputs/inputUpload";
import ButtonPrimary from "../../buttons/buttonPrimary";
import ButtonSecondary from "../../buttons/buttonSecondary";

const MaintenanceSection = ({ orderServiceData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { label: 'Manutenção corretiva', value: 'check01' },
        { label: 'Manutenção preventiva', value: 'check02' },
    ];

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
                <div className=" px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-1">
                        <InputSelect
                            label="Checklist"
                            options={options}
                        />

                        <p className="text-xs md:text-sm text-primary-dark mb-2" >Imagens - antes da manutenção</p>
                        <InputUpload
                            label="Anexar arquivo(s)"
                        />
                        <p className="text-xs md:text-sm text-primary-dark mb-2">Imagens - pós da manutenção</p>
                        <InputUpload
                            label="Anexar arquivo(s)"
                        />

                    </div>
                    <div className="flex flex-col md:flex-row justify-end">
                        <div className="flex flex-col pb-4 md:flex-row gap-y-1.5 ">
                            <ButtonSecondary>Cancelar</ButtonSecondary>

                            <ButtonPrimary >Salvar</ButtonPrimary>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default MaintenanceSection;
