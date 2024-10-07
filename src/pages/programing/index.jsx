import StatusBar from "../../components/title/statusBar";
import SectionCard from "../../components/section/sectionPrimary";
import InputPrimary from "../../components/inputs/inputPrimary";
import InputSelect from "../../components/inputs/inputSelect";
import InputUpload from "../../components/inputs/inputUpload";
import MultiSelect from "../../components/inputs/multiSelect";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import ButtonSecondary from "../../components/buttons/buttonSecondary";
import { useNavigate, useParams } from "react-router-dom";
import DateTimePicker from "../../components/inputs/dateTimePicker";
import { mockOrderServiceData } from "./dados";
import HistoryCard from "../../components/cards/historyCard";
import { useState } from "react";

export default function Programing() {
    const [showHistory, setShowHistory] = useState(false);

    const history = [
        `OS Nº ${mockOrderServiceData.requisicao} Criada em 00/00/0000 agente: Fulano da Silva `,
        `OS Nº ${mockOrderServiceData.requisicao} Editada em 00/00/0000 agente: Fulano da Silva`,
        `OS Nº ${mockOrderServiceData.requisicao} Programada em 00/00/0000 agente: Fulano da Silva`
    ];

    const { id } = useParams();
    const navigate = useNavigate();
    const orderServiceData = mockOrderServiceData;

    const overseer = [
        { label: 'Almir Lima', value: 'encarregado1' },
        { label: 'Lucas', value: 'encarregado2' },
    ];

    const options = [
        { label: '08h às 12h', value: 'manha' },
        { label: '14h às 18h', value: 'tarde' },
        { label: '19h às 22h', value: 'noite' },
        { label: '08h às 18h', value: 'integral' }
    ];

    const professionals = [
        { label: 'FULANO', value: 'fulano' },
        { label: 'CICLANO', value: 'ciclano' },
        { label: 'BELTRANO', value: 'beltrano' },
        { label: 'CABOCLO', value: 'caboclo' }
    ];

    const handleMultiSelectChange = (selectedOptions) => {
        console.log('Selecionado:', selectedOptions);
    };

    const handleSelectChange = (event) => {
        console.log('Selecionado:', event.target.value);
    };

    const handleHistoryClick = () => {
        setShowHistory(true);
    };

    const handleDateChange = (date) => {
        console.log("Data selecionada:", date);
    };

    return (
        <>
            <div className="flex flex-col mt-16 md:mt-16 mx-1.5 md:mx-4">
                <div className="flex py-4 md:py-6 text-base md:text-2xl text-primary-light font-normal">
                    <h2>Programação</h2>
                </div>

                <div className="flex flex-col">
                    <StatusBar
                        requisitionNumber={orderServiceData.requisicao} // Use o número real da OS
                        origin="SIPAC"
                        situation="A atender"
                        reopening="nenhuma"
                        onHistoryClick={handleHistoryClick} // Ao clicar, abre o histórico
                    /> 
                </div>
                
                <div className="flex flex-col gap-x-2.5 md:flex-row">
                    <div className="w-full md:w-5/12">
                        <SectionCard title="Dados da ordem de serviço">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Classificação"
                                    placeholder={orderServiceData.classificacao}
                                    disabled
                                />
                                <InputPrimary
                                    label="Unidade"
                                    placeholder={orderServiceData.unidade}
                                    disabled
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
                                <InputPrimary
                                    label="Solicitante"
                                    placeholder={orderServiceData.solicitante}
                                    disabled
                                />
                                <InputPrimary
                                    label="Objeto de preparo"
                                    placeholder={orderServiceData.objetoPreparo}
                                    disabled
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Tipo de manutenção"
                                    placeholder={orderServiceData.tipoManutencao}
                                    disabled
                                />
                                <InputPrimary
                                    label="Sistema"
                                    placeholder={orderServiceData.sistema}
                                    disabled
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Unidade da manutenção"
                                    placeholder={orderServiceData.unidadeManutencao}
                                    disabled
                                />
                                <InputPrimary
                                    label="Campus"
                                    placeholder={orderServiceData.campus}
                                    disabled
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Data do cadastro"
                                    placeholder={orderServiceData.dataCadastro}
                                    disabled
                                />
                                <InputPrimary
                                    label="Dias em aberto"
                                    placeholder={orderServiceData.diasEmAberto}
                                    disabled
                                />
                            </div>
                            <div className="mt-2">
                                <InputUpload label="Anexar documento(s)" disabled />
                            </div>
                        </SectionCard>
                    </div>

                    <div className="flex-1">
                        <SectionCard title="Programação">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                                <DateTimePicker
                                    label="Data programada"
                                    placeholder="exemplo: 00/00/0000"
                                    onDateChange={handleDateChange}
                                />
                                <InputSelect
                                    label="Turno"
                                    options={options}
                                    onChange={handleSelectChange}
                                />
                                <InputSelect
                                    label="Encarregado"
                                    options={overseer}
                                    onChange={handleSelectChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1">
                                <MultiSelect
                                    label="Profissional(is)"
                                    options={professionals}
                                    onChange={handleMultiSelectChange}
                                />
                                <InputPrimary
                                    label="Custo estimado"
                                    placeholder="Informe"
                                />
                                <InputPrimary
                                    label="Observação"
                                    placeholder="Informe"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row justify-end gap-y-2">
                                <ButtonSecondary onClick={e => navigate("../Listing")}>Cancelar</ButtonSecondary>
                                <ButtonPrimary>Salvar</ButtonPrimary>
                            </div>
                        </SectionCard>
                    </div>
                </div>
            </div>

            {showHistory && <HistoryCard history={history} onClose={() => setShowHistory(false)} />}
        </>
    );
};