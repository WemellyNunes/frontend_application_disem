import PageTitle from "../../components/title"
import { RiCalendarScheduleFill } from "react-icons/ri";
import StatusBar from "../../components/title/statusBar";
import SectionSecondary from "../../components/section/sectionSecondary";

export default function Programing() {

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
                        <SectionSecondary title="Dados da ordem de serviço">


                        </SectionSecondary>
                    </div>
                    <div className="flex-1">
                        <SectionSecondary title="Programção">

                        </SectionSecondary>

                    </div>

                </div>
            </div >
        </>

    )

};