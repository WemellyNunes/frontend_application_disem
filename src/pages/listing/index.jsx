import PageTitle from "../../components/title"
import { FaListUl } from "react-icons/fa";
import TabsAndTable from "../../components/table/tabsAndTable";


export default function Listing() {
    return (
        <>
            <div className="flex flex-col mt-16 md:mt-20">
                <div className="flex py-4 md:py-6 text-bas md:text-2xl text-primary-light font-normal mx-1.5 md:mx-4">
                    <h2>Lista de OS</h2>
                </div>

                <div className="flex justify-center">
                    <TabsAndTable/>

                </div>


            </div>
        </>
    )


};