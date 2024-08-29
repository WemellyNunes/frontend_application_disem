import ButtonPrimary from "./components/buttons/buttonPrimary";
import ButtonSecondary from "./components/buttons/buttonSecondary";
import ButtonTertiary from "./components/buttons/buttonTertiary";
import Header from "./components/header";
import InputPrimary from "./components/inputs/inputPrimary";
import InputSecondary from "./components/inputs/inputSecondary";
import { FaEye, FaArrowRight, FaSearch } from 'react-icons/fa'; // Exemplo de ícones da biblioteca react-icons



function App() {

  return (
    <>
      <header>
        <Header />
      </header>

      <section>
        <InputPrimary label="Solicitante" placeholder="Informe" />
        <InputSecondary
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          buttonIcon={<FaEye />} />
        <div className="flex flex-row ">
          <ButtonPrimary>Primário</ButtonPrimary>
          <ButtonSecondary>Secundário</ButtonSecondary>
          <ButtonTertiary>Terciário</ButtonTertiary>
        </div>
      
      </section>



    </>
  )
}

export default App
