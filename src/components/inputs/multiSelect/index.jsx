import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MultiSelect = ({ label, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        const alreadySelected = selectedOptions.includes(option);

        if (alreadySelected) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }

        onChange([...selectedOptions, option]);
    };

    const isSelected = (option) => selectedOptions.includes(option);

    return (
        <div className="w-full">
            <label className="block text-primary-dark text-sm font-normal mb-2">
                {label}
            </label>
            <div className="relative">
                <button
                    className=" appearance-none w-full bg-white border border-gray-300
                     text-gray-400 px-4 h-10 rounded leading-tight focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between 
                     items-center my-1 text-sm italic"
                    onClick={handleToggle}
                    type="button"
                >
                    {selectedOptions.length > 0
                        ? selectedOptions.map((option) => option.label).join(', ')
                        : 'Selecione'}
                    {isOpen ? <FaChevronUp className="h-4 w-4 text-primary-light" /> : <FaChevronDown className="h-4 w-4 text-primary-light" />}
                </button>
                {isOpen && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <label key={option.value} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                    checked={isSelected(option)}
                                    onChange={() => handleSelectOption(option)}
                                />
                                <span className="ml-2 text-gray-700">{option.label}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiSelect;


/*
como usa:

const profissionais = [
    { label: 'FULANINHO COSTA DA SILVA - FUNÇÃO', value: 'fulaninho' },
    { label: 'CICLANINHO ALMEIDA - FUNÇÃO', value: 'ciclaninho' },
    { label: 'BELTRANINHO PEREIRA - FUNÇÃO', value: 'beltraninho' },
  ];

  const handleMultiSelectChange = (selectedOptions) => {
    console.log('Selecionado:', selectedOptions);
  };

   <MultiSelect
          label="Profissional(is)"
          options={profissionais}
          onChange={handleMultiSelectChange}
        />


*/
