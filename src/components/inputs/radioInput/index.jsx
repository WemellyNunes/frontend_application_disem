const RadioInput = ({ title, options, name, selectedValue, onChange }) => {
    return (
        <div>
        <p className="text-primary-dark text-xs md:text-sm font-normal mb-1">{title}</p>
        <div className="flex items-center space-x-6">
          {options.map((option) => (
            <label key={option.value} className="inline-flex items-center">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={onChange}
                className="form-radio h-4 w-4 text-blue-600 border-2 border-blue-600 focus:ring-0"
              />
              <span className="ml-2 text-primary-dark text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default RadioInput;

  /*

  function ExamplePage() {
  const [selectedOption, setSelectedOption] = useState('comum');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { label: 'Comum', value: 'comum' },
    { label: 'ADM', value: 'adm' },
  ];

  return (
    <div className="p-4">
      <RadioGroup
        title="Tipo de tratamento"
        name="tipoTratamento"
        options={options}
        selectedValue={selectedOption}
        onChange={handleRadioChange}
      />
    </div>
  );
}

export default ExamplePage;
  */