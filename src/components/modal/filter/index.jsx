import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import DateTimePicker from "../../inputs/dateTimePicker";
import MultiSelect from "../../inputs/multiSelect";
import ButtonPrimary from "../../buttons/buttonPrimary";
import ButtonSecondary from "../../buttons/buttonSecondary";

const FilterModal = ({ isOpen, onClose, onApplyFilters, appliedFilters }) => {  // Recebendo appliedFilters
  const options = [
    { label: 'IGE', value: 'ige' },
    { label: 'ICE', value: 'ice' },
    { label: 'ICH', value: 'ich' },
    { label: 'CTIC', value: 'ctic' },
  ];

  const system = [
    { label: 'CIVIL', value: 'civil' },
    { label: 'ELETRICO', value: 'eletrico' },
    { label: 'HIDROSANITARIO', value: 'hidro' },
    { label: 'REFRIGERAÇÃO', value: 'refri' },
    { label: 'MISTO', value: 'misto' }
  ];

  const maintence = [
    { label: 'CORRETIVA', value: 'corretiva' },
    { label: 'PREVENTIVA', value: 'preventiva' },
  ];

  const origin = [
    { label: 'DISEM', value: 'disem' },
    { label: 'SIPAC', value: 'sipac' },
  ];

  

  const [filters, setFilters] = useState({
    requisicao: '',
    dataCriacao: '',
    unidade: [],
    solicitante: '',
    tipoManutencao: [],
    sistemas: [],
    origem: [],
  });

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleDateChange = (date) => {
    setFilters({ ...filters, dataCriacao: date });
  };

  const handleMultiSelectChange = (name, selectedOptions) => {
    setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: selectedOptions,  // Atualiza o estado com as seleções do MultiSelect
    }));
};

  const handleApplyFilters = () => {
    const validFilters = Object.fromEntries(
      Object.entries(filters).filter(([key, value]) => value && value.length > 0)
    );
    onApplyFilters(validFilters);
    onClose();
  };

  // Inicializando os campos de filtros com os appliedFilters passados como prop
  useEffect(() => {
    if (appliedFilters) {
      setFilters(appliedFilters);
    }
  }, [appliedFilters]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 mx-4 md:mx-0 rounded-md shadow-lg w-96 max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base md:text-xl font-medium text-primary-light">Filtrar por:</h3>
          <button onClick={onClose}>
            <FaTimes className="text-gray-500 hover:text-red-500" />
          </button>
        </div>

        <div className="space-y-4">
          <DateTimePicker
            label="Data de criação"
            placeholder="00/00/0000"
            onDateChange={handleDateChange}
            value={filters.dataCriacao}  // Setando valor
          />
          <MultiSelect
            label="Unidade"
            options={options}
            onChange={(selectedOptions) => handleMultiSelectChange('unidade', selectedOptions)}
            selectedValues={filters.unidade}  // Setando valor
          />
          <MultiSelect
            label="Sistemas"
            options={system}
            onChange={(selectedOptions) => handleMultiSelectChange('sistemas', selectedOptions)}
            selectedValues={filters.sistemas}  // Setando valor
          />
          <MultiSelect
            label="Tipo de manutenção"
            options={maintence}
            onChange={(selectedOptions) => handleMultiSelectChange('tipoManutencao', selectedOptions)}
            selectedValues={filters.tipoManutencao}  // Setando valor
          />
          <MultiSelect
            label="Origem"
            options={origin}
            onChange={(selectedOptions) => handleMultiSelectChange('origem', selectedOptions)}
            selectedValues={filters.origem}  // Setando valor
          />
        </div>

        <div className="flex justify-between mt-10">
          <ButtonSecondary onClick={onClose}>Cancelar</ButtonSecondary>
          <ButtonPrimary onClick={handleApplyFilters}>Adicionar</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
