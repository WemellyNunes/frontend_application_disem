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
    const [selectedOption, setSelectedOption] = useState('comum');
    const [classe, setClasse] = useState('');
    const [indiceRisco, setIndiceRisco] = useState(''); // Inicializando como string
    const [valorRisco, setValorRisco] = useState(null);
    const [prioridade, setPrioridade] = useState('');
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageContent, setMessageContent] = useState({ type: '', title: '', message: '' });
    const [isEditing, setIsEditing] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [requisicao, setRequisicao] = useState('');
    const [solicitante, setSolicitante] = useState('');
    const [unidade, setUnidade] = useState('');
    const [origem, setOrigem] = useState('');
    const [manutencao, setManutencao] = useState('');
    const [sistema, setSistema] = useState('');
    const [unidadeManutencao, setUnidadeManutencao] = useState('');
    const [campus, setCampus] = useState('');
    const [objetoPreparo, setObjetoPreparo] = useState('');

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
        { label: 'Risco de Acidentes', value: 'riscoAcidentes' }, // Corrigir para corresponder à chave do pesosRisco
        { label: 'Interrupções de Entrada de Parâmetros', value: 'integridade' },
        { label: 'Integridade Estrutural', value: 'sistemas' },
        { label: 'Fechamento de Áreas', value: 'acessibilidade' },
    ];
    

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSave = () => {

        console.log(`Classe: ${classe}, Índice de Risco: ${indiceRisco}`);

        console.log({ origem, requisicao, solicitante, unidade, manutencao, sistema, indiceRisco, unidadeManutencao, campus, objetoPreparo }); // Para depuração
        // Validar se todos os campos obrigatórios foram preenchidos
        if (!origem || !requisicao.trim() || !solicitante.trim() || !unidade || !manutencao || !sistema || !indiceRisco || !unidadeManutencao || !campus.trim() || !objetoPreparo.trim()) {
            setMessageContent({ type: 'error', message: 'Por favor, preencha todos os campos obrigatórios.' });
            setShowMessageBox(true);
            return; // Interrompe a função se a validação falhar
        }

        console.log(`Índice de Risco: ${indiceRisco}`);

        // Se todos os campos obrigatórios estiverem preenchidos, continuar com o processamento
        const valor = calcularValorRisco(classe, parseInt(indiceRisco)); // Certifique-se de que está passando um número
        setValorRisco(valor);

        const prioridadeCalculada = calcularPrioridade(valor);
        setPrioridade(prioridadeCalculada);

        const ordemDeServico = {
            origem: selectedOption,
            classe,
            indiceRisco,
            valorRisco: valor,
            prioridade: prioridadeCalculada,
            requisicao,
            solicitante,
            unidade,
            objetoPreparo: campus,
            tipoManutencao: manutencao,
            sistema,
            unidadeManutencao,
            campus,
            tratamento: selectedOption,
            documento: "caminho_do_arquivo" // Adicionar lógica para lidar com uploads se necessário
        };

        // Exibir no console para verificar
        console.log('Dados da ordem de serviço:', ordemDeServico);
        setIsSaved(true); // Marca o formulário como salvo
        setIsEditing(false); // Desativa os inputs

        setMessageContent({ type: 'success', title: 'Sucesso.', message: `Ordem de serviço salva com prioridade: ${prioridadeCalculada}` });
        setShowMessageBox(true);

        setTimeout(() => {
            setShowMessageBox(false);
        }, 2000);
    };

    const handleEdit = () => {
        setIsEditing(true); // Ativa os inputs novamente
        setIsSaved(false); // Marca o formulário como não salvo
    };

    const handleSelectChange = (e) => {
        console.log('Valor selecionado:', e.target.value); // Adicione este log
        setIndiceRisco(e.target.value);
    };

    const handleContinue = () => {
        navigate("../Programing"); // Navega para a página de lista de OS
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
                <div className="flex py-4 md:py-6 text-base md:text-2xl text-primary-light font-normal mx-1.5 md:mx-4">
                    <h2>Cadastro de Ordem de Serviço</h2>
                </div>

                <div className="flex flex-col mx-1.5 md:mx-4">
                    <div className="flex-1">
                        <SectionCard title={"Dados da ordem de serviço"}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                                <InputSelect
                                    label="Origem"
                                    options={origin}
                                    onChange={(e) => setOrigem(e.target.value)}
                                    value={origem}
                                    disabled={!isEditing}
                                />
                                <InputPrimary
                                    label="N° da requisição"
                                    placeholder="Informe"
                                    value={requisicao}
                                    onChange={(e) => setRequisicao(e.target.value)}
                                    disabled={!isEditing}
                                />
                                <InputSelect
                                    label="Classificação"
                                    options={classification}
                                    onChange={(e) => setClasse(e.target.value)}
                                    value={classe}
                                    disabled={!isEditing}
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
                                    value={solicitante}
                                    onChange={(e) => setSolicitante(e.target.value)}
                                    disabled={!isEditing}
                                />
                                <InputSelect
                                    label="Unidade"
                                    options={unit}
                                    onChange={(e) => setUnidade(e.target.value)}
                                    value={unidade}
                                    disabled={!isEditing}
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
                                    onChange={(e) => setObjetoPreparo(e.target.value)}
                                    value={objetoPreparo}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputSelect
                                    label="Tipo de manutenção"
                                    options={maintence}
                                    onChange={(e) => setManutencao(e.target.value)}
                                    value={manutencao}
                                    disabled={!isEditing}
                                />
                                <InputSelect
                                    label="Sistema"
                                    options={system}
                                    onChange={(e) => setSistema(e.target.value)}
                                    value={sistema}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
                                <InputSelect
                                    label="Indice de risco"
                                    options={indicesRisco}
                                    onChange={handleSelectChange} // Armazene como string
                                    value={indiceRisco}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputSelect
                                    label="Unidade da manutenção"
                                    options={unitMaintence}
                                    onChange={(e) => setUnidadeManutencao(e.target.value)}
                                    value={unidadeManutencao}
                                    disabled={!isEditing}
                                />
                                <InputPrimary
                                    label="Campus"
                                    placeholder="Informe"
                                    value={campus}
                                    onChange={(e) => setCampus(e.target.value)}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                <RadioInput
                                    title="Tipo de tratamento"
                                    name="tipoTratamento"
                                    options={options}
                                    selectedValue={selectedOption}
                                    onChange={handleRadioChange}
                                    disabled={!isEditing}
                                />
                                <InputUpload label="Anexar documento(s)" />
                            </div>
                        </SectionCard>
                    </div>
                </div>

                <div className="flex flex-col fixed bottom-0 left-0 right-0 mx-auto border-t border-primary-light bg-white py-2 md:py-4 mt-4 items-center justify-end md:flex-row h-14 md:h-16 gap-y-2 z-50">
                    <div className="flex pr-0 md:pr-6">
                        {isSaved ? (
                            <>
                                <ButtonSecondary onClick={handleEdit}>
                                    Editar
                                </ButtonSecondary>
                                <ButtonPrimary onClick={handleContinue}>
                                    Continuar
                                </ButtonPrimary>
                            </>
                        ) : (
                            <>
                                <ButtonSecondary onClick={() => navigate("../Programing")}>
                                    Cancelar
                                </ButtonSecondary>
                                <ButtonPrimary onClick={handleSave}>
                                    Salvar
                                </ButtonPrimary>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
