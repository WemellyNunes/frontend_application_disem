import ButtonPrimary from "./components/buttons/buttonPrimary";
import ButtonSecondary from "./components/buttons/buttonSecondary";
import ButtonTertiary from "./components/buttons/buttonTertiary";
import Header from "./components/header";
import InputPrimary from "./components/inputs/inputPrimary";
import InputSecondary from "./components/inputs/inputSecondary";
import { FaEye, FaArrowRight, FaSearch } from 'react-icons/fa'; 
import InputSelect from "./components/inputs/inputSelect";// Exemplo de ícones da biblioteca react-icons



function App() {

  const unidades = [
    { label: 'Instituto de Geociências e Engenharias', value: 'geo' },
    { label: 'Instituto de Ciências e Exatas', value: 'ciex' },
    { label: 'Instituto de Ciências Humanas', value: 'cih' },
    { label: 'Centro de Tecnologia e Comunicação', value: 'tec' },
  ];

  const handleSelectChange = (event) => {
    console.log('Selecionado:', event.target.value);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <section>
        <InputSelect
        label="Unidade"
        options={unidades}
        onChange={handleSelectChange}
        />

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
