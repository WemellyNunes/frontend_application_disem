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
import SectionCard from "./components/section/sectionPrimary";
import React, { useState } from 'react';
import SectionSecondary from "./components/section/sectionSecondary";
import InputUpload from "./components/inputs/inputUpload";
import RadioInput from "./components/inputs/radioInput";
import StatCard from "./components/cards";


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

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState('comum');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { label: 'Comum', value: 'comum' },
    { label: 'ADM', value: 'adm' },
  ];

  return (
    <>
      <Header />

      <section className="flex flex-col">

        <div className="flex w-full justify-center px-4">
          <PageTitle
            icon={FaCalendarAlt}
            text="Programação de Ordem de Serviço" />
        </div>

        <div className="flex flex-col justify-between mx-4 mt-3 gap-x-2.5 sm:flex-row">
          <StatCard
            title="Sipac"
            approved={13}
            finalized={6}
            backgroundColor="bg-primary-light"
            percentage={65}

          />

          <StatCard
            title="Mensal"
            approved={13}
            finalized={6}
            backgroundColor="bg-green-700"
          />

          <StatCard
            title="Semanal"
            approved={13}
            finalized={6}
            backgroundColor="bg-red-500"
          />

          <StatCard
            title="Hoje"
            approved={13}
            finalized={6}
            backgroundColor="bg-orange-500"
          />

        <StatCard
            title="Hoje"
            approved={13}
            finalized={6}
            backgroundColor="bg-yellow-500"
          />

        </div>


        <div className="flex flex-col mx-4 gap-x-2.5 md:flex-row">
          <div className="flex-1">
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

              <InputUpload label="Anexar documento(s)" />

              <div>
                <RadioInput
                  title="Tipo de tratamento"
                  name="tipoTratamento"
                  options={options}
                  selectedValue={selectedOption}
                  onChange={handleRadioChange}

                />
              </div>

            </SectionCard>
          </div>


          <div className="flex-1">
            <SectionSecondary title="Programação">
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
            </SectionSecondary>
          </div>
        </div>
        <div className="flex flex-col w-full">

          <div className="flex-1 mx-4">
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
                buttonIcon={<FaEye />} />

            </SectionCard>

          </div>
        </div>


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
