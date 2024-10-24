import TabsAndTable from "../../components/table/tabsAndTable";
import PageTitle from "../../components/title";
import { FaRegListAlt } from "react-icons/fa";


export default function Listing() {
    return (
        <>
            <div className="flex flex-col w-full px-2">
                 {/* w-full garante que ocupe 100% da largura disponível */}
                 <div className="flex justify-center pb-2">
                    <PageTitle
                        icon={FaRegListAlt}
                        text="Listas "
                        backgroundColor="bg-white"
                        textColor="text-primary-light"
                    />
                </div>

                <div className="flex flex-grow"> {/* flex-grow para ocupar espaço */}
                    <TabsAndTable />
                </div>
            </div>
        </>
    );
}
