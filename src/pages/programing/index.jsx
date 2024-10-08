import StatusBar from "../../components/title/statusBar";
import SectionCard from "../../components/section/sectionPrimary";
import InputPrimary from "../../components/inputs/inputPrimary";
import InputSelect from "../../components/inputs/inputSelect";
import InputUpload from "../../components/inputs/inputUpload";
import MultiSelect from "../../components/inputs/multiSelect";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import ButtonSecondary from "../../components/buttons/buttonSecondary";
import ButtonTertiary from "../../components/buttons/buttonTertiary";
import { useNavigate, useParams } from "react-router-dom";
import DateTimePicker from "../../components/inputs/dateTimePicker";
import { mockOrderServiceData } from "./dados";
import HistoryCard from "../../components/cards/historyCard";
import { useState } from "react";
import MessageBox from "../../components/box/message";
import { FaTrash, FaEdit } from "react-icons/fa";
import { TbFileExport } from "react-icons/tb";

export default function Programing() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        data: '',
        turno: '',
        encarregado: '',
        profissionais: [],
        custo: '',
        observacao: '',
    });

    const [showHistory, setShowHistory] = useState(false);
    const [emptyFields, setEmptyFields] = useState({});
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageContent, setMessageContent] = useState({ type: '', title: '', message: '' });
    const [isEditing, setIsEditing] = useState(true);
    const [isSaved, setIsSaved] = useState(false);

    const history = [
        `OS Nº ${mockOrderServiceData.requisicao} Criada em 00/00/0000 agente: Fulano da Silva `,
        `OS Nº ${mockOrderServiceData.requisicao} Editada em 00/00/0000 agente: Fulano da Silva`,
        `OS Nº ${mockOrderServiceData.requisicao} Programada em 00/00/0000 agente: Fulano da Silva`
    ];

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
        setFormData((prevData) => ({ ...prevData, profissionais: selectedOptions }));
    };

    const handleFieldChange = (field) => (value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const validateFields = () => {
        const newEmptyFields = {};
        const requiredFields = ['data', 'turno', 'encarregado', 'profissionais']; 

        requiredFields.forEach((field) => {
            const value = formData[field];
            if (Array.isArray(value) ? value.length === 0 : !value.trim()) {
                newEmptyFields[field] = true;
            }
        });

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

        setIsSaved(true);
        setIsEditing(false);
        setMessageContent({ type: 'success', title: 'Sucesso.', message: 'Ordem de serviço salva com sucesso!' });
        setShowMessageBox(true);
        setTimeout(() => setShowMessageBox(false), 1500);
    };

    const handleEdit = () => {
        setIsEditing(true);
        setIsSaved(false);
    };

    const handleHistoryClick = () => {
        setShowHistory(true);
    };

    const handleDateChange = (date) => {
        console.log("Data selecionada:", date);
        setFormData((prevData) => ({ ...prevData, data: date })); 
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
            <div className="flex flex-col mt-16 md:mt-16 mx-1.5 md:mx-4">
                <div className="flex py-4 md:py-6 text-base md:text-2xl text-primary-light font-normal">
                    <h2>Programação</h2>
                </div>

                <div className="flex flex-col">
                    <StatusBar
                        requisitionNumber={orderServiceData.requisicao}
                        origin="SIPAC"
                        situation="A atender"
                        reopening="nenhuma"
                        onHistoryClick={handleHistoryClick}
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
                                    disabled={!isEditing}
                                    className={emptyFields.data ? 'border-red-500' : ''}
                                />
                                <InputSelect
                                    label="Turno"
                                    options={options}
                                    onChange={handleFieldChange('turno')}
                                    value={formData.turno}
                                    disabled={!isEditing}
                                    className={emptyFields.turno ? 'border-red-500' : ''}
                                />
                                <InputSelect
                                    label="Encarregado"
                                    options={overseer}
                                    onChange={handleFieldChange('encarregado')}
                                    value={formData.encarregado}
                                    disabled={!isEditing}
                                    className={emptyFields.encarregado ? 'border-red-500' : ''}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1">
                                <MultiSelect
                                    label="Profissional(is)"
                                    options={professionals}
                                    onChange={handleMultiSelectChange}
                                    selectedValues={formData.profissionais} // Passa as opções selecionadas corretamente
                                    disabled={!isEditing}
                                    className={emptyFields.profissionais ? 'border-red-500' : ''}
                                />
                                <InputPrimary
                                    label="Custo estimado"
                                    placeholder="Informe"
                                    value={formData.custo}
                                    onChange={handleFieldChange('custo')}
                                    disabled={!isEditing}
                                />
                                <InputPrimary
                                    label="Observação"
                                    placeholder="Informe"
                                    value={formData.observacao}
                                    onChange={handleFieldChange('observacao')}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row justify-end">
                                <div className="flex flex-col md:flex-row gap-y-1.5 ">
                                    {isSaved ? (
                                        <>
                                            <ButtonTertiary
                                                bgColor="bg-white"
                                                textColor="text-red-500"
                                                icon={<FaTrash />}
                                                hoverColor="hover:bg-red-100">
                                                Excluir
                                            </ButtonTertiary>

                                            <ButtonSecondary
                                                borderColor="border border-primary-light"
                                                bgColor="bg-white"
                                                hoverColor="hover:bg-secondary-hover"
                                                textColor="text-primary-light"
                                                icon={<FaEdit />}
                                                onClick={handleEdit}>
                                                Editar
                                            </ButtonSecondary>

                                            <ButtonPrimary
                                                bgColor="bg-primary-light"
                                                hoverColor="hover:bg-primary-hover"
                                                textColor="text-white"
                                                icon={<TbFileExport/>}
                                                >
                                                Exportar
                                            </ButtonPrimary>
                                        </>
                                    ) : (
                                        <>
                                            <ButtonSecondary onClick={() => navigate("../Listing")}>Cancelar</ButtonSecondary>
                                            <ButtonPrimary onClick={handleSave}>Salvar</ButtonPrimary>
                                        </>
                                    )}
                                </div>
                            </div>
                        </SectionCard>
                    </div>
                </div>
            </div>
            {showHistory && <HistoryCard history={history} onClose={() => setShowHistory(false)} />}
        </>
    );
}