import SectionCard from "../../components/section/sectionPrimary";
import InputSecondary from "../../components/inputs/inputSecondary";
import { FaEye, FaArrowRight, FaSearch } from 'react-icons/fa';
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import { PiX } from "react-icons/pi";

export default function Login() {
    return (
        <>
            <div className="flex flex-col items-center justify-between gap-10 m-10 md:flex-row">

                <div className="flex-1 w-full flex-col">
                    <h1 className="text-2xl font-semibold text-primary-light">Olá, colaborador. Bem vindo de volta!</h1>
                    <p className="text-primary-dark text-base">Realize seu login e bom trabalho!</p>
                    <div className="w-2/3 md:">
                        <img src="./images/login_img.png" alt="imagem login" className="w-full" />
                    </div>
                </div>

                <div className="flex-1 w-full flex-col">

                    <SectionCard title="Login">
                        <InputSecondary
                            label="Usuario"
                            placeholder="Digite seu nome de usuario"
                            type="text"
                            buttonIcon={<FaArrowRight />}
                        />

                        <InputSecondary
                            label="Senha"
                            placeholder="Digite sua senha"
                            type="password"
                            buttonIcon={<FaEye />}
                        />

                        <ButtonPrimary>Entrar</ButtonPrimary>


                    </SectionCard>

                </div>

            </div>
        </>
    )
};