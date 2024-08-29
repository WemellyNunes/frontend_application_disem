import ButtonPrimary from "./components/buttons/buttonPrimary";
import ButtonSecondary from "./components/buttons/buttonSecondary";
import ButtonTertiary from "./components/buttons/buttonTertiary";
import Header from "./components/header";
import InputPrimary from "./components/inputs/inputPrimary";
import InputSecondary from "./components/inputs/inputSecondary";
import { FaEye, FaArrowRight, FaSearch } from 'react-icons/fa';
import InputSelect from "./components/inputs/inputSelect";
import MultiSelect from "./components/inputs/multiSelect";



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

  const profissionais = [
    { label: 'FULANINHO COSTA DA SILVA - FUNÇÃO', value: 'fulaninho' },
    { label: 'CICLANINHO ALMEIDA - FUNÇÃO', value: 'ciclaninho' },
    { label: 'BELTRANINHO PEREIRA - FUNÇÃO', value: 'beltraninho' },
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    console.log('Selecionado:', selectedOptions);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <section className="flex w-full flex-col">
        <div className="flex w-full flex-row justify-center p-4">
          <div className="flex flex-1">
            <InputSelect
              label="Unidade"
              options={unidades}
              onChange={handleSelectChange}
            />
          </div>
          <div className="flex flex-1 ">
            <MultiSelect
              label="Profissional(ais)"
              options={profissionais}
              onChange={handleMultiSelectChange}
            />
          </div>
        </div>

        <div className="flex flex-1 w-full p-4">
          <div className="flex-1">
            <InputPrimary
              label="Solicitante"
              placeholder="Informe" />
          </div>
          <div className="flex-1">
            <InputSecondary
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              buttonIcon={<FaEye />} />
          </div>
        </div>

        <div className="flex flex-row justify-end p-4">
          <ButtonPrimary>Primário</ButtonPrimary>
          <ButtonSecondary>Secundário</ButtonSecondary>
          <ButtonTertiary>Terciário</ButtonTertiary>
        </div>
      </section>


    </>
  )
}

export default App
