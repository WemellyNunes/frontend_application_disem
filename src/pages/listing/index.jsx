import PageTitle from "../../components/title"
import { FaListUl } from "react-icons/fa";
import TabsAndTable from "../../components/table";


export default function Listing() {
    return (
        <>
            <div className="flex flex-col mt-16 md:mt-20">
                <div className="flex justify-center mx-4">
                    <PageTitle
                        icon={FaListUl}
                        text="Lista ordem de serviço"
                        backgroundColor="bg-primary-light"
                        textColor="text-white"
                    />
                </div>

                <div className="flex justify-center">
                    <TabsAndTable/>

                </div>


            </div>
        </>
    )


};