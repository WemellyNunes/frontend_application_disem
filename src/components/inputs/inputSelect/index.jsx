import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const InputSelect = ({ label, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <label className="block text-primary-dark text-xs md:text-sm font-normal mb-2">
                {label}
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-400 
                    h-9 md:h-10 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500 text-xs md:text-sm italic cursor-pointer my-1"
                    onChange={onChange}
                    onClick={handleToggle}
                    onBlur={() => setIsOpen(false)}
                >
                    <option  value="" disabled selected hidden>
                        Selecione
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    {isOpen ? <FaChevronUp className="h-4 w-4 text-primary-light" /> : <FaChevronDown className="h-4 w-4 text-primary-light" />}
                </div>
            </div>
        </div>
    );
};

export default InputSelect;


/*
    COMO UTILIZAR:

    const ExamplePage = () => {
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
    <div>
      <SelectInput
        label="Unidade"
        options={unidades}
        onChange={handleSelectChange}
      />
    </div>
  );
};

*/
