
import TabsAndTable from "../../components/table/tabsAndTable";


export default function Listing() {
    return (
        <>
            <div className="flex flex-col w-full"> {/* w-full garante que ocupe 100% da largura disponível */}
                <div className="flex pb-3 text-base md:text-xl text-primary-light font-medium ">
                    <h2>Listas</h2>
                </div>

                <div className="flex flex-grow overflow-hidden"> {/* flex-grow para ocupar espaço */}
                    <TabsAndTable />
                </div>
            </div>
        </>
    );
}
