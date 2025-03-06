import { FaBan } from "react-icons/fa";
import MessageCard from '../../components/cards/menssegeCard';


export default function Unauthorized() {

    return (
        <>
            <div className="flex w-full flex-col justify-center items-center">
                <div className="mt-10 md:mt-6 w-full md:px-20">
                    <MessageCard
                        type="warning"
                        message="Acesso não autorizado pelo usuário administrador, aguarde liberação."
                        storageKey="showMessageBan"
                    />
                </div>
                <div className="flex flex-col justify-center items-center mt-20">
                    <FaBan className="h-8 w-8 pb-1" />
                    <h2 className="font-medium text-3xl">401</h2>
                    <h3 className="text-lg">Não autorizado</h3>
                </div>

            </div>
        </>
    )
};