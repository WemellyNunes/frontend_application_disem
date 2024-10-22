const Checkbox = ({ label, checked, onChange, disabled, isError }) => {
    return (
        <label className={`flex items-center  cursor-pointer ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className={`form-checkbox h-4 w-4 text-primary-light ${isError ? 'border-red-500' : ''}`}
            />
            <span className={`ml-2 text-xs md:text-sm text-primary-dark`}>{label}</span>
        </label>
    );
};

export default Checkbox;
