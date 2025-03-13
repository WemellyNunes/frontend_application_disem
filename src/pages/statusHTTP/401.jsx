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
                <img src="./401image.png" alt="não autorizado" width={400}/>
            </div>
            <div className="pt-5">
                <button onClick={handleLogout} className="flex items-center justify-center h-11 px-8 border rounded-full bg-primary-light hover:bg-green-800 text-white">
                    Voltar
                </button>

            </div>

        </div>
    )
};