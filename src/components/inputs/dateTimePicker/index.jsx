import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isValid, parse, format } from "date-fns";
import { ptBR } from "date-fns/locale"; 
import './index.css'

// Registrando o locale PT-BR
registerLocale('pt-BR', ptBR);

const DateTimePicker = ({ label, placeholder, onDateChange }) => {
  const [inputValue, setInputValue] = useState(""); // 
  const [startDate, setStartDate] = useState(null); // 
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); 

 
  const formatInputDate = (value) => {
    let cleanValue = value.replace(/\D/g, "");

   
    if (cleanValue.length >= 2) cleanValue = cleanValue.slice(0, 2) + "/" + cleanValue.slice(2);
    if (cleanValue.length >= 5) cleanValue = cleanValue.slice(0, 5) + "/" + cleanValue.slice(5, 9);

    return cleanValue;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const formattedValue = formatInputDate(value);
    setInputValue(formattedValue);

   
    if (formattedValue.length === 10) {
      const parsedDate = parse(formattedValue, "dd/MM/yyyy", new Date());
      if (isValid(parsedDate)) {
        setStartDate(parsedDate);
        onDateChange && onDateChange(parsedDate);
      }
    }
  };

  // Ao selecionar uma data pelo calendário
  const handleDateSelect = (date) => {
    const formattedDate = format(date, "dd/MM/yyyy");
    setInputValue(formattedDate);
    setStartDate(date);
    onDateChange && onDateChange(date);
    setIsCalendarOpen(false); // Fecha o calendário após a seleção
  };

  return (
    <div className="relative mb-4">
      <label className="block text-xs md:text-sm font-normal text-primary-dark mb-2">{label}</label>
      <div className="flex items-center border border-gray-300 rounded h-9 md:h-10 pl-4 pr-1 shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "exemplo: 00/00/0000"}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={10} // Limita a entrada para 10 caracteres (dd/MM/yyyy)
          className="w-full border-none focus:outline-none placeholder-gray-400 text-xs md:text-sm italic  text-primary-dark"
        />
        <FaCalendarAlt
          className="text-primary-light hover:bg-secondary-hover cursor-pointer rounded ml-2 p-1 h-6 w-6"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        />
      </div>
      {isCalendarOpen && (
        <DatePicker
          selected={startDate}
          onChange={handleDateSelect}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR" // Aplicando o idioma português ao calendário
          inline
          className="absolute mt-2 z-50 bg-white shadow-lg rounded-md"
          // Customizando o estilo do calendário
          calendarClassName="custom-calendar"
        />
      )}
    </div>
  );
};

export default DateTimePicker;