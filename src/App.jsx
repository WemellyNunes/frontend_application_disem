import ButtonPrimary from "./components/buttons/buttonPrimary";
import ButtonSecondary from "./components/buttons/buttonSecondary";
import ButtonTertiary from "./components/buttons/buttonTertiary";
import Header from "./components/header";
import InputPrimary from "./components/inputs/inputPrimary";
import InputSecondary from "./components/inputs/inputSecondary";
import { FaEye, FaArrowRight, FaSearch } from 'react-icons/fa';
import InputSelect from "./components/inputs/inputSelect";
import MultiSelect from "./components/inputs/multiSelect";
import PageTitle from "./components/title";
import { FaCalendarAlt } from 'react-icons/fa';
import SectionCard from "./components/section";


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

        <div className="flex w-full justify-center px-4">
          <PageTitle
            icon={FaCalendarAlt}
            text="Programação de Ordem de Serviço" />
        </div>

        <SectionCard title="Dados da ordem de serviço">

          <InputSelect
            label="Unidade"
            options={unidades}
            onChange={handleSelectChange}
          />

          <MultiSelect
            label="Profissional(ais)"
            options={profissionais}
            onChange={handleMultiSelectChange}
          />

        </SectionCard>

        <SectionCard title="Dados do solicitante">

            <InputPrimary
              label="Solicitante"
              placeholder="Informe" />

            <InputSecondary
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              buttonIcon={<FaEye />}/>

        </SectionCard>

        <div className="flex w-full flex-row justify-end p-4">
          <div className="">
            <ButtonPrimary>Primário</ButtonPrimary>
          </div>
          <div>
            <ButtonSecondary>Secundário</ButtonSecondary>
          </div>
          <div>
            <ButtonTertiary>Terciário</ButtonTertiary>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
