import { FaBan } from "react-icons/fa";
import MessageCard from '../../components/cards/menssegeCard';
import { useNavigate } from "react-router-dom";


export default function Unauthorized() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center">
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
            <div className="pt-10">
                <button onClick={handleLogout} className="flex items-center justify-center h-11 px-8 border rounded-full bg-primary-light hover:bg-green-800 text-white">
                    Voltar
                </button>

            </div>

        </div>
    )
};