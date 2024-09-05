import StatCard from "../../components/cards"
import PageTitle from "../../components/title"
import { MdStackedBarChart } from "react-icons/md";
import BarGraphic from "../../components/graphics/barPrimary"
import SectionSecondary from "../../components/section/sectionSecondary";
import LocationBarChart from "../../components/graphics/barSecondary";
import DoughnutChart from "../../components/graphics/doughnutPrimary";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col mt-20">

                <div className="flex justify-center mx-4">
                    <PageTitle
                        icon={MdStackedBarChart}
                        text="Visão geral"
                        backgroundColor="bg-white"
                        textColor="text-primary-light"
                    />
                </div>

                <div className="flex flex-col justify-between mx-4 mt-2 gap-x-2.5 sm:flex-row">
                    <StatCard
                        title="Sipac"
                        approved={13}
                        finalized={6}
                        backgroundColor="bg-primary-light"
                        percentage={65}
                        hover="hover:bg-primary-hover"
                    />

                    <StatCard
                        title="Mensal"
                        approved={13}
                        finalized={6}
                        backgroundColor="bg-secondary-light"
                        hover="hover:bg-primary-hover"
                    />

                    <StatCard
                        title="Semanal"
                        approved={13}
                        finalized={6}
                        backgroundColor="bg-tertiary-light"
                    />

                    <StatCard
                        title="Hoje"
                        approved={13}
                        finalized={6}
                        backgroundColor="bg-secondary-light"
                    />

                    <StatCard
                        title="Hoje"
                        approved={13}
                        finalized={6}
                        backgroundColor="bg-primary-light"
                    />
                </div>
                <div className="flex flex-col mx-4">

                    <div className="flex flex-col gap-x-2.5 sm:flex-row">

                        <SectionSecondary>
                            <BarGraphic/>
                        </SectionSecondary>

                        <SectionSecondary>
                            <div className="w-full pl-8 lg:w-96">
                                <DoughnutChart/>
                            </div>
                        </SectionSecondary>
                    </div>
                    <div className="flex flex-col gap-x-2.5 sm:flex-row">

                        <SectionSecondary>
                            <LocationBarChart/>
                        </SectionSecondary>

                        <SectionSecondary>
                            <DoughnutChart/>
                        </SectionSecondary>
                    </div>



                </div>

            </div>

        </>
    )
};