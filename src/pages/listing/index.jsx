
import TabsAndTable from "../../components/table/tabsAndTable";


export default function Listing() {
    return (
        <>
            <div className="flex flex-col w-full"> {/* w-full garante que ocupe 100% da largura disponível */}
                <div className="flex py-4 md:py-6 text-base md:text-2xl text-primary-light font-normal mx-1.5 md:mx-4">
                    <h2>Lista de OS</h2>
                </div>

                <div className="flex flex-grow justify-center overflow-hidden"> {/* flex-grow para ocupar espaço */}
                    <TabsAndTable />
                </div>
            </div>
        </>
    );
}
