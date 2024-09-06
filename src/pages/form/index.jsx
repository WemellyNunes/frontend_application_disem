import PageTitle from "../../components/title"
import { FaFileInvoice } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/section/sectionPrimary";
import SectionSecondary from "../../components/section/sectionSecondary";
import SectionTertiary from "../../components/section/sectionTertiary";
import InputSelect from "../../components/inputs/inputSelect"
import InputPrimary from "../../components/inputs/inputPrimary";
import RadioInput from "../../components/inputs/radioInput";
import InputUpload from "../../components/inputs/inputUpload";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import ButtonSecondary from "../../components/buttons/buttonSecondary";

export default function Form() {

    const navigate = useNavigate();

    const origin = [
        { label: 'DISEM', value: 'disem' },
        { label: 'SIPAC', value: 'sipac' },
    ];

    const classification = [
        { label: 'Classe A', value: 'A' },
        { label: 'Classe B', value: 'B' },
        { label: 'Classe C', value: 'C' }
    ];

    const unit = [
        { label: 'Instituto de Geociências e Engenharias', value: 'geo' },
        { label: 'Instituto de Ciências e Exatas', value: 'ciex' },
        { label: 'Instituto de Ciências Humanas', value: 'cih' },
        { label: 'Centro de Tecnologia e Comunicação', value: 'tec' },
    ];

    const unitMaintence = [
        { label: 'UNIDADE I - MARABÁ', value: 'mab1' },
        { label: 'UNIDADE II - MARABÁ', value: 'mab2' },
        { label: 'UNIDADE III - MARABÁ', value: 'mab3' },
        { label: 'UNIDADE SANTANA DO ARAGUAIA', value: 'santana' },
        { label: 'UNIDADE SÃO FELIX DO XINGU', value: 'saoFelix' },
        { label: 'UNIDADE RONDON', value: 'rondon' }
    ];

    const system = [
        { label: 'CIVIL', value: 'civil' },
        { label: 'ELETRICO', value: 'eletrico' },
        { label: 'HIDROSANITARIO', value: 'hidro' },
        { label: 'REFRIGERAÇÃO', value: 'refri' },
        { label: 'MISTO', value: 'misto' }
    ];

    const maintence = [
        { label: 'CORRETIVA', },
        { label: 'PREVENTIVA', },
    ];

    const [selectedOption, setSelectedOption] = useState('comum');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const options = [
        { label: 'Comum', value: 'comum' },
        { label: 'ADM', value: 'adm' },
    ];

    const handleSelectChange = (event) => {
        console.log('Selecionado:', event.target.value);
    };

    return (
        <>
            <div className="flex flex-col mt-16 md:mt-20">

                <div className="flex justify-center mx-4">
                    <PageTitle
                        icon={FaFileInvoice}
                        text="Cadastro de ordem de serviço"
                        backgroundColor="bg-primary-light"
                        textColor="text-white"
                    />
                </div>

                <div className="flex flex-col mx-4">

                    <div className="flex-1">

                        <SectionTertiary title={"Dados da ordem de serviço"}>
                            <InputSelect
                                label="Origem"
                                options={origin}
                                onChange={handleSelectChange}
                            />

                            <InputPrimary
                                label="N° da requisição"
                                placeholder="Informe"
                            />

                            <InputSelect
                                label="Classificação"
                                options={classification}
                                onChange={handleSelectChange}
                            />
                        </SectionTertiary>

                    </div>

                    <div className="flex-1">
                        <SectionCard title="Dados do solicitante">
                            <InputPrimary
                                label="Solicitante"
                                placeholder="Informe"
                            />

                            <InputSelect
                                label="Unidade"
                                options={unit}
                                onChange={handleSelectChange}
                            />

                        </SectionCard>
                    </div>

                    <div className="flex-1">
                        <SectionSecondary title="Dados da manutenção">
                            <InputPrimary
                                label="Objeto de preparo"
                                placeholder="Informe"
                            />

                            <InputSelect
                                label="Tipo de manutenção"
                                options={maintence}
                                onChange={handleSelectChange}
                            />

                            <InputSelect
                                label="Sistema"
                                options={system}
                                onChange={handleSelectChange}
                            />

                            <InputSelect
                                label="Indicador de manutenção"
                                options={system}
                                onChange={handleSelectChange}
                            />

                            <InputSelect
                                label="Unidade da manutenção"
                                options={unitMaintence}
                                onChange={handleSelectChange}
                            />

                            <InputPrimary
                                label="Campus"
                                placeholder="Informe"
                            />

                            <RadioInput
                                title="Tipo de tratamento"
                                name="tipoTratamento"
                                options={options}
                                selectedValue={selectedOption}
                                onChange={handleRadioChange}
                            />

                            <div className="">
                                <InputUpload label="Anexar documento(s)"/>
                            </div>

                        </SectionSecondary>

                    </div>
                    <div className="flex flex-col m-6 items-center justify-center md:flex-row gap-y-2">
                        <ButtonPrimary onClick={e => navigate("../Dashboard")} >Salvar</ButtonPrimary>
                        <ButtonSecondary onClick={e => navigate("../Programing")} >Salvar e Programar</ButtonSecondary>
                    </div>


                </div>


            </div>

        </>
    )
};