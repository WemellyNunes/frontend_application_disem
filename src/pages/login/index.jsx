import { useEffect, useState } from "react";
import InputSecondary from "../../components/inputs/inputSecondary";
import { FaEye, FaArrowRight } from 'react-icons/fa';
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import { useNavigate } from "react-router-dom";
import { getToken, login as loginAPI, buscarUsuario, salvarUsuario, listarUsuarioPorId } from "../../utils/api/api";
import MessageBox from "../../components/box/message";
import { getDefaultRouteForRole } from "../../routers/privateRoute";


export default function Login() {
    const [isSaving, setIsSaving] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [errorFields, setErrorFields] = useState({ usuario: false, senha: false });
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        if (field === "usuario") {
            setUsuario(value);
            if (value.trim() !== "") {
                setErrorFields((prev) => ({ ...prev, usuario: false }));
            }
        }
        if (field === "senha") {
            setSenha(value);
            if (value.trim() !== "") {
                setErrorFields((prev) => ({ ...prev, senha: false }));
            }
        }
    };

    const handleLogin = async () => {
        setShowErrorMessage(false);
    
        if (!usuario.trim() || !senha.trim()) {
            setErrorFields({
                usuario: usuario.trim() === "",
                senha: senha.trim() === "",
            });
            return;
        }
    
        try {
            setIsSaving(true);
            const token = await getToken();
            sessionStorage.setItem("authToken", token);
    
            await loginAPI(usuario, senha);
    
            const userInfo = await buscarUsuario(usuario);
    
            if (!userInfo || !userInfo.id_usuario || !userInfo.nome) {
                console.error("Erro: Dados do usuário incompletos", userInfo);
                setShowErrorMessage(true);
                return;
            }
    
            let userFromDB = await listarUsuarioPorId(userInfo.id_usuario);
    
            if (!userFromDB) {
                const newUser = {
                    idUsuario: userInfo.id_usuario,
                    nome: userInfo.nome,
                    email: userInfo.email,
                };
                await salvarUsuario(newUser);
                userFromDB = await listarUsuarioPorId(userInfo.id_usuario);
            }
    
            const userData = {
                idUsuario: userFromDB.idUsuario,
                nome: userFromDB.nome,
                email: userFromDB.email || "sem-email",
                papel: userFromDB.papel,
                id: userFromDB.id
            };
    
            sessionStorage.setItem("userSession", JSON.stringify(userData));

            
            const defaultRoute = getDefaultRouteForRole(userData.papel);
            navigate(defaultRoute);
    
        } catch (error) {
            console.error("Erro ao acessar o sistema:", error);
    
            if (error.response && error.response.status === 500) {
                setShowErrorMessage(true);
            }
        } finally {
            setIsSaving(false);
        }
    };    


    return (
        <div className="flex flex-col min-h-screen">
            {/* Conteúdo principal */}
            <div className="flex flex-col items-center justify-center flex-grow px-4 md:px-0">
                <div className="flex flex-col justify-center items-center w-full px-0">
                    <div className="flex flex-col md:items-center mb-6 gap-y-4 bg">
                        <img src="./logo-app.png" alt="logo" width={60} />
                        <h2 className="text-3xl font-semibold text-gray-700">
                            Bem vindo ao ReparaUni!
                        </h2>
                        <p className="text-base font-light text-primary-dark">
                            Preencha os dados abaixo para acessar a plataforma e um bom trabalho!
                        </p>
                    </div>
                    <div className="flex flex-col h-full w-full md:w-[500px] mt-12">
                        <div className="mb-6">
                            <InputSecondary
                                label="Usuário"
                                placeholder="Nome"
                                type="text"
                                value={usuario}
                                onChange={(e) => handleInputChange("usuario", e.target.value)}
                                buttonIcon={<FaArrowRight />}
                                errorMessage={errorFields.usuario ? "Usuário é obrigatório" : ""}
                            />
                        </div>
                        <div className="mb-10">
                            <InputSecondary
                                label="Senha"
                                placeholder="Digite sua senha"
                                type="password"
                                value={senha}
                                onChange={(e) => handleInputChange("senha", e.target.value)}
                                buttonIcon={<FaEye />}
                                errorMessage={errorFields.senha ? "Senha é obrigatória" : ""}
                            />
                        </div>
                        <ButtonPrimary onClick={handleLogin} loading={isSaving}>
                            Entrar
                        </ButtonPrimary>
                    </div>
                </div>
                {showErrorMessage && (
                    <MessageBox
                        type="error"
                        title="Erro de autenticação."
                        message="Usuário ou senha inválidos. Tente novamente."
                        onClose={() => setShowErrorMessage(false)}
                    />
                )}
            </div>
            
            {/* Footer fixado no fim da tela */}
            <footer className="mt-auto text-center text-sm py-4 text-gray-500">
                © ReparaUni - 2025
            </footer>
        </div>
    );
    
};