import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/section/sectionPrimary";
import InputSelect from "../../components/inputs/inputSelect";
import InputPrimary from "../../components/inputs/inputPrimary";
import RadioInput from "../../components/inputs/radioInput";
import InputUpload from "../../components/inputs/inputUpload";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import ButtonSecondary from "../../components/buttons/buttonSecondary";
import MessageBox from "../../components/box/message";
import { calcularValorRisco, calcularPrioridade } from "../../utils/matriz";

export default function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        selectedOption: 'comum',
        classe: '',
        indiceRisco: '',
        valorRisco: null,
        prioridade: '',
        requisicao: '',
        solicitante: '',
        unidade: '',
        origem: '',
        manutencao: '',
        sistema: '',
        unidadeManutencao: '',
        campus: '',
        objetoPreparo: '',
    });

    const [emptyFields, setEmptyFields] = useState({});
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageContent, setMessageContent] = useState({ type: '', title: '', message: '' });
    const [isEditing, setIsEditing] = useState(true);
    const [isSaved, setIsSaved] = useState(false);

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
        { label: 'CORRETIVA' },
        { label: 'PREVENTIVA' },
    ];

    const indicesRisco = [
        { label: 'Ação de sustentabilidade', value: 'sustentabilidade' },
        { label: 'Estetica interna', value: 'estetica' },
        { label: 'Conforto do usuario', value: 'confortoUsuario' },
        { label: 'Danos maiores', value: 'danosMaiores' },
        { label: 'Risco de acidentes', value: 'riscoAcidentes' }
    ];

    const campusMapping = {
        'mab1': 'Marabá',
        'mab2': 'Marabá',
        'mab3': 'Marabá',
        'santana': 'Santana do Araguaia',
        'saoFelix': 'São Félix do Xingu',
        'rondon': 'Rondon',
    };

    const handleFieldChange = (field) => (value) => {
        setFormData((prevData) => {
            const updatedData = { ...prevData, [field]: value };

            if (field === 'unidadeManutencao') {
                updatedData.campus = campusMapping[value] || '';
            }

            return updatedData;
        });


    };

    const validateFields = () => {
        const newEmptyFields = {};
        const requiredFields = ['origem', 'classe', 'requisicao', 'solicitante', 'unidade', 'manutencao', 'sistema', 'indiceRisco', 'unidadeManutencao', 'campus', 'objetoPreparo'];

        requiredFields.forEach((field) => {
            const value = formData[field];
            if (typeof value !== 'string' || !value.trim()) {
                newEmptyFields[field] = true;
            }
        });

        setEmptyFields(newEmptyFields);
        return Object.keys(newEmptyFields).length === 0;

    };

    console.log('formData antes da validação:', formData);

    const handleSave = () => {
        if (!validateFields()) {
            setMessageContent({ type: 'error', title: 'Erro.', message: 'Por favor, preencha todos os campos obrigatórios.' });
            setShowMessageBox(true);
            setTimeout(() => setShowMessageBox(false), 1500);
            return;
        }

        const valor = calcularValorRisco(formData.classe, formData.indiceRisco);
        setFormData((prevData) => ({ ...prevData, valorRisco: valor }));

        const prioridadeCalculada = calcularPrioridade(valor);
        setFormData((prevData) => ({ ...prevData, prioridade: prioridadeCalculada }));

        const ordemDeServico = {
            ...formData,
            valorRisco: valor,
            prioridade: prioridadeCalculada,
            tratamento: formData.selectedOption,
            documento: "caminho_do_arquivo",
        };

        console.log('Dados da ordem de serviço:', ordemDeServico);
        setIsSaved(true);
        setIsEditing(false);
        setMessageContent({ type: 'success', title: 'Sucesso.', message: `Ordem de serviço salva com prioridade: ${prioridadeCalculada}` });
        setShowMessageBox(true);
        setTimeout(() => setShowMessageBox(false), 2500);
    };


    const handleEdit = () => {
        setIsEditing(true);
        setIsSaved(false);
    };

    const handleContinue = () => {
        navigate("../Programing");
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
                    <h2>Cadastro de Ordem de Serviço</h2>
                </div>

                <div className="flex flex-col ">
                    <div className="flex-1">
                        <SectionCard title={"Dados da ordem de serviço"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                                <InputSelect
                                    label="Origem"
                                    options={origin}
                                    onChange={handleFieldChange('origem')}
                                    value={formData.origem}
                                    disabled={!isEditing}
                                    className={emptyFields.origem ? 'border-red-500' : ''}
                                />
                                <InputPrimary
                                    label="N° da requisição"
                                    placeholder="Informe"
                                    value={formData.requisicao}
                                    onChange={handleFieldChange('requisicao')}
                                    disabled={!isEditing}
                                    className={emptyFields.requisicao ? 'border-red-500' : ''}
                                />
                                <InputSelect
                                    label="Classificação"
                                    options={classification}
                                    onChange={handleFieldChange('classe')}
                                    value={formData.classe}
                                    disabled={!isEditing}
                                    className={emptyFields.classe ? 'border-red-500' : ''}
                                />
                            </div>
                        </SectionCard>
                    </div>

                    <div className="flex-1">
                        <SectionCard title="Dados do solicitante">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <InputPrimary
                                    label="Solicitante"
                                    placeholder="Informe"
                                    value={formData.solicitante}
                                    onChange={handleFieldChange('solicitante')}
                                    disabled={!isEditing}
                                    className={emptyFields.solicitante ? 'border-red-500' : ''}
                                />
                                <InputSelect
                                    label="Unidade"
                                    options={unit}
                                    onChange={handleFieldChange('unidade')}
                                    value={formData.unidade}
                                    disabled={!isEditing}
                                    className={emptyFields.unidade ? 'border-red-500' : ''}
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
                                    onChange={handleFieldChange('objetoPreparo')}
                                    value={formData.objetoPreparo}
                                    disabled={!isEditing}
                                    className={emptyFields.objetoPreparo ? 'border-red-500' : ''}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <InputSelect
                                    label="Tipo de manutenção"
                                    options={maintence}
                                    onChange={handleFieldChange('manutencao')}
                                    value={formData.manutencao}
                                    disabled={!isEditing}
                                    className={emptyFields.manutencao ? 'border-red-500' : ''}
                                />
                                <InputSelect
                                    label="Sistema"
                                    options={system}
                                    onChange={handleFieldChange('sistema')}
                                    value={formData.sistema}
                                    disabled={!isEditing}
                                    className={emptyFields.sistema ? 'border-red-500' : ''}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-6">
                                <InputSelect
                                    label="Indice de risco"
                                    options={indicesRisco}
                                    onChange={handleFieldChange('indiceRisco')}
                                    value={formData.indiceRisco}
                                    disabled={!isEditing}
                                    className={emptyFields.indiceRisco ? 'border-red-500' : ''}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <InputSelect
                                    label="Unidade da manutenção"
                                    options={unitMaintence}
                                    onChange={handleFieldChange('unidadeManutencao')}
                                    value={formData.unidadeManutencao}
                                    disabled={!isEditing}
                                    className={emptyFields.unidadeManutencao ? 'border-red-500' : ''}
                                />

                                <InputPrimary
                                    label="Campus"
                                    placeholder="Informe"
                                    value={formData.campus}
                                    onChange={handleFieldChange('campus')}
                                    disabled={!isEditing}
                                    className={emptyFields.campus ? 'border-red-500' : ''}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                <RadioInput
                                    title="Tipo de tratamento"
                                    name="tipoTratamento"
                                    options={options}
                                    selectedValue={formData.selectedOption}
                                    onChange={handleFieldChange('selectedOption')}
                                    disabled={!isEditing}
                                    className={emptyFields.options ? 'border-red-500' : ''}
                                />
                                <InputUpload
                                    label="Anexar documento(s)"
                                    disabled={!isEditing}
                                />
                            </div>
                        </SectionCard>
                    </div>
                </div>

                <div className="flex flex-col fixed bottom-0 left-0 right-0 mx-auto border-t border-primary-light bg-white py-2 md:py-4 mt-4 items-center justify-end md:flex-row h-14 md:h-16 gap-y-2 z-50">
                    <div className="flex pr-0 md:pr-6">
                        {isSaved ? (
                            <>
                                <ButtonSecondary onClick={handleEdit}>Editar</ButtonSecondary>
                                <ButtonPrimary onClick={handleContinue}>Continuar</ButtonPrimary>
                            </>
                        ) : (
                            <>
                                <ButtonSecondary onClick={() => navigate("../Listing")}>Cancelar</ButtonSecondary>
                                <ButtonPrimary onClick={handleSave}>Salvar</ButtonPrimary>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
