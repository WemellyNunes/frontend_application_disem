import ButtonPrimary from "../../buttons/buttonPrimary";
import ButtonSecondary from "../../buttons/buttonSecondary";

const ConfirmationModal = ({ title, message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
                <h2 className="text-lg text-primary-dark  font-bold mb-3">{title}</h2>
                <p className="mb-6 text-base text-primary-dark ">{message}</p>
                <div className="flex justify-center">
                    <ButtonSecondary onClick={onCancel}>
                        Cancelar
                    </ButtonSecondary>
                    <ButtonPrimary onClick={onConfirm}>
                        Confirmar
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;