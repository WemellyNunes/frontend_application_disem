import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/title";
import SectionCard from "../../components/section/sectionPrimary";
import InputSelect from "../../components/inputs/inputSelect";
import InputPrimary from "../../components/inputs/inputPrimary";
import RadioInput from "../../components/inputs/radioInput";
import InputUpload from "../../components/inputs/inputUpload";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import ButtonSecondary from "../../components/buttons/buttonSecondary";
import MessageBox from "../../components/box/message";
import { FaFileInvoice } from "react-icons/fa";
import { calcularValorRisco, calcularPrioridade } from "../../utils/matriz";

export default function Form() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('comum');
    const [classe, setClasse] = useState('A');
    const [indiceRisco, setIndiceRisco] = useState(17);
    const [valorRisco, setValorRisco] = useState(null);
    const [prioridade, setPrioridade] = useState('');
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageContent, setMessageContent] = useState({ type: '', title: '', message: '' });

    const options = [
        { label: 'Comum', value: 'comum' },
        { label: 'ADM', value: 'adm' },
    ];

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

    const indicesRisco = [
        { label: 'Risco de Acidentes', value: 'risco_acidentes' },
        { label: 'Interrupções de Entrada de Parâmetros', value: 'integridade_estrutural' },
        { label: 'Integridade Estrutural', value: 'sistemas_prevencao' },
        { label: 'Fechamento de Áreas', value: 'acessibilidade' },
    ];

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectChange = (event) => {
        console.log('Selecionado:', event.target.value);
    };

    const handleSave = () => {
        const valor = calcularValorRisco(classe, indiceRisco);
        setValorRisco(valor);

        const prioridadeCalculada = calcularPrioridade(valor);
        setPrioridade(prioridadeCalculada);

        // Simular os dados que seriam enviados
        const ordemDeServico = {
            origem: selectedOption,
            classe,
            indiceRisco,
            valorRisco: valor,
            prioridade: prioridadeCalculada,
            requisicao: document.querySelector('input[placeholder="Informe"]').value, // Exemplo de como pegar um valor de input
            solicitante: document.querySelector('input[placeholder="Informe"]').value, // Ajuste conforme o placeholder correto ou adicione estados para armazenar esses valores
            unidade: document.querySelector('select[name="unidade"]').value, // Ajuste conforme necessário
            objetoPreparo: document.querySelector('input[placeholder="Informe"]').value,
            tipoManutencao: document.querySelector('select[name="tipo_manutencao"]').value,
            sistema: document.querySelector('select[name="sistema"]').value,
            indiceRisco: document.querySelector('select[name="indice_risco"]').value,
            unidadeManutencao: document.querySelector('select[name="unidade_manutencao"]').value,
            campus: document.querySelector('input[placeholder="Informe"]').value,
            tratamento: selectedOption,
            documento: "caminho_do_arquivo" // Adicionar lógica para lidar com uploads se necessário
        };

        // Exibir no console para verificar
        console.log('Dados da ordem de serviço:', ordemDeServico);

        const isSuccess = true;
        if (isSuccess) {
            setMessageContent({ type: 'success', title: 'Sucesso.', message: `Ordem de serviço salva com prioridade: ${prioridadeCalculada}` });
            setShowMessageBox(true);
        } else {
            setMessageContent({ type: 'error', message: 'Erro ao salvar a ordem de serviço.' });
            setShowMessageBox(true);
        }

        setTimeout(() => {
            setShowMessageBox(false);
        }, 2000);
    };


    return (
        <>
            {showMessageBox && (
                <MessageBox
                    type={messageContent.type}
                    title={messageContent.title}
                    message={messageContent.message}
                    onClose={() => setShowMessageBox(false)}
                />
            )}

            <div className="flex flex-col mt-16 md:mt-20">
                <div className="flex py-6 text-xl text-primary-light font-normal mx-1.5 md:mx-4">
                    <h2>Cadastro de Ordem de Serviço</h2>
                    {/*<PageTitle
                        icon={FaFileInvoice}
                        text="Cadastro de ordem de serviço"
                        backgroundColor="bg-primary-light"
                        textColor="text-white"
                    />*/}
                </div>

                <div className="flex flex-col mx-1.5 md:mx-4">
                    <div className="flex-1">
                        <SectionCard title={"Dados da ordem de serviço"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
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
                                    onChange={(e) => setClasse(e.target.value)}
                                />
                            </div>
                        </SectionCard>
                    </div>

                    <div className="flex-1">
                        <SectionCard title="Dados do solicitante">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Solicitante"
                                    placeholder="Informe"
                                />
                                <InputSelect
                                    label="Unidade"
                                    options={unit}
                                    onChange={handleSelectChange}
                                />
                            </div>
                        </SectionCard>
                    </div>

                    <div className="flex-1 mb-20">
                        <SectionCard title="Dados da manutenção">
                            <div className="grid grid-cols-1 md:grid-cols-1">
                                <InputPrimary
                                    label="Objeto de preparo"
                                    placeholder="Informe"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
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
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
                                <InputSelect
                                    label="Indice de risco"
                                    options={indicesRisco}
                                    onChange={(e) => setIndiceRisco(parseInt(e.target.value))}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputSelect
                                    label="Unidade da manutenção"
                                    options={unitMaintence}
                                    onChange={handleSelectChange}
                                />
                                <InputPrimary
                                    label="Campus"
                                    placeholder="Informe"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                <RadioInput
                                    title="Tipo de tratamento"
                                    name="tipoTratamento"
                                    options={options}
                                    selectedValue={selectedOption}
                                    onChange={handleRadioChange}
                                />
                                <InputUpload label="Anexar documento(s)" />
                            </div>
                        </SectionCard>
                    </div>




                </div>
                <div className="flex flex-col fixed bottom-0 left-0 right-0 mx-auto border-t-2 border-secondary-back bg-white py-5 mt-4 items-center justify-end md:flex-row h-16 gap-y-2 z-50 shadow-2xl ">
                    <div className="flex pr-0 md:pr-6">
                        <ButtonPrimary onClick={handleSave}>Salvar</ButtonPrimary>
                        <ButtonSecondary onClick={() => navigate("../Programing")}>
                            Salvar e Programar
                        </ButtonSecondary>
                    </div>
                </div>
            </div>
        </>
    );
}
