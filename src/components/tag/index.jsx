import { IoMdClose } from "react-icons/io";

const Tag = ({ label, onRemove }) => {
    const handleRemove = () => {
        const confirmed = window.confirm(`Você tem certeza que deseja remover o filtro "${label}"?`);
        if (confirmed) {
            onRemove();
        }
    };

    return (
        <div className="flex items-center mt-1.5 bg-blue-100 text-primary-light px-2 gap-x-2 py-1 rounded border border-primary-light">
            {label}
            <button onClick={handleRemove}>
                <IoMdClose className="text-primary-light hover:text-red-500" />
            </button>
        </div>
    );
};

export default Tag;
