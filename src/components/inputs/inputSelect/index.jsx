import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const InputSelect = ({ label, options, onChange, value, disabled, className }) => {
    return (
        <div className="w-full mb-4">
            <label className="block text-primary-dark text-xs md:text-sm font-normal mb-2">
                {label}
            </label>
            <div className="relative">
                <select
                    className={`block appearance-none w-full bg-white border border-gray-300 text-primary-dark
                    h-9 md:h-10 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500
                    focus:border-blue-500 text-xs md:text-sm italic cursor-pointer my-1 ${className} ${disabled ? 'bg-gray-100' : ''}`}
                    onChange={(e) => onChange(e.target.value)}
                    value={value} // Controle o valor do select com props
                    disabled={disabled} // Permite desativar o select
                >
                    <option value="" disabled>
                        Selecione
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-primary-dark px-2">
                    {value ? <FaChevronUp className="h-4 w-4 text-primary-light" /> : <FaChevronDown className="h-4 w-4 text-primary-light" />}
                </div>
            </div>
        </div>
    );
};

export default InputSelect;
