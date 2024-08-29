import ButtonPrimary from "./components/buttons/buttonPrimary";
import ButtonSecondary from "./components/buttons/buttonSecondary";
import ButtonTertiary from "./components/buttons/buttonTertiary";
import Header from "./components/header";
import InputPrimary from "./components/inputs/inputPrimary";


function App() {

  return (
    <>
      <div>
        <Header/>
        <p>ola</p>
        <InputPrimary label="Solicitante" placeholder="Informe" />
        <ButtonPrimary>Primário</ButtonPrimary>
        <ButtonSecondary>Secundário</ButtonSecondary>
        <ButtonTertiary>Terciário</ButtonTertiary>




      </div>
      
      
    </>
  )
}

export default App
