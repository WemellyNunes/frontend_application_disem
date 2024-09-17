import Row from "../rows";

const Table = ({ filteredData, onProgramClick }) => {
    return (
        <table className="min-w-full table-auto mt-1 ">
            <thead className="font-light">
                <tr className="bg-white text-primary-light text-sm font-light border-b">
                    <th className=" px-4 py-6">N° Requisição</th>
                    <th className="px-4 py-6">Criação</th>
                    <th className="px-4 py-6">Origem</th>
                    <th className="px-4 py-6">Tipo de Manutenção</th>
                    <th className="px-4 py-6">Sistema</th>
                    <th className="px-4 py-6">Unidade</th>
                    <th className="px-4 py-6">Solicitante</th>
                    <th className="px-4 py-6">Programação</th>
                    <th className="px-4 py-6">Status</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <Row key={item.id} item={item} index={index} onProgramClick={onProgramClick} />
                    ))
                ) : (
                    <tr>
                        <td colSpan="9" className="p-2 text-center text-primary-dark">
                            Nenhum registro encontrado
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;