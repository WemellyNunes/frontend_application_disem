import PageTitle from "../../components/title"
import { RiCalendarScheduleFill } from "react-icons/ri";
import StatusBar from "../../components/title/statusBar";
import SectionCard from "../../components/section/sectionPrimary";
import InputPrimary from "../../components/inputs/inputPrimary";
import InputSelect from "../../components/inputs/inputSelect";
import InputUpload from "../../components/inputs/inputUpload";
import MultiSelect from "../../components/inputs/multiSelect";

export default function Programing() {

    const overseer = [
        { label: 'Almir lima', value: 'encarregado1' },
        { label: 'Lucas', value: 'encarregado2' },
    ];

    const options = [
        { label: '08h ás 12h', value: 'manha' },
        { label: '14h ás 18h', value: 'tarde' },
        { label: '19h as 22h', value: 'noite' },
        { label: '08h as 18h', value: 'integral' }
    ];

    const handleSelectChange = (event) => {
        console.log('Selecionado:', event.target.value);
    };

    const handleHistoryClick = () => {
        alert('historico de OS')
    };

    return (
        <>
            <div className="flex flex-col mt-16 md:mt-20">

                <div className="flex justify-center mx-4">
                    <PageTitle
                        icon={RiCalendarScheduleFill}
                        text="Programação ordem de serviço"
                        backgroundColor="bg-primary-light"
                        textColor="text-white"
                    />
                </div>

                <div className="flex flex-col">
                    <StatusBar
                        requisitionNumber="00000"
                        origin="SIPAC"
                        situation="A atender"
                        reopening="nenhuma"
                        onHistoryClick={handleHistoryClick}
                    />
                </div>
                <div className="flex flex-col mx-4 gap-x-2.5 md:flex-row">
                    <div className="flex-1">
                        <SectionCard title="Dados da ordem de serviço">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Clasificação"
                                    placeholder="classe x"
                                />
                                <InputPrimary
                                    label="Unidade"
                                    placeholder="instituto x"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
                                 <InputPrimary
                                    label="Solicitante"
                                    placeholder="x"
                                />

                                <InputPrimary
                                    label="Objeto de preparo"
                                    placeholder="x"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Tipo de manutenção"
                                    placeholder="x"
                                />

                                <InputPrimary
                                    label="Sistema"
                                    placeholder="x"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Unidade da manutenção"
                                    placeholder="x"
                                />

                                <InputPrimary
                                    label="Campus"
                                    placeholder="x"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <InputPrimary
                                    label="Data do cadastro"
                                    placeholder="x"
                                />

                                <InputPrimary
                                    label="Dias em aberto"
                                    placeholder="x"
                                />
                            </div>
                            <div className="mt-2" >
                            
                                <InputUpload label="Anexar documento(s)"/>

                            </div>
                        </SectionCard>
                    </div>

                    <div className="flex-1">
                        <SectionCard title="Programação">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                                <InputPrimary
                                    label="Data"
                                    placeholder="00/00/0000"
                                />
                                <InputSelect
                                    label="Turno"
                                    options={options}
                                    onChange={handleSelectChange}
                                />
                                <InputSelect
                                    label="encarregado"
                                    options={overseer}
                                    onChange={handleSelectChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-4">
                                
                            </div>

                        </SectionCard>

                        <div>

                        </div>
                    </div>

                </div>
            </div >
        </>

    )

};