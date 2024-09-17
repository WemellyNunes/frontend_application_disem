const HistoryCard = ({ history, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg text-primary-light font-medium">Histórico</h2>
                    <button onClick={onClose} className="text-red-500 text-lg">&times;</button>
                </div>
                <div className="mt-4">
                    {history.map((item, index) => (
                        <div key={index} className="mb-2 p-2 border rounded-md text-primary-dark">
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;