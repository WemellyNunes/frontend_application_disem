import Row from "../rows";

const Table = ({ filteredData, onProgramClick }) => {
    return (
        <div className="overflow-x-auto h-full bg-white mx-1.5 md:mx-0 mt-1">
            <table className="min-w-full table-auto overflow-x-auto ">
                <thead className="font-light">
                    <tr className="bg-white text-primary-light text-xs md:text-base font-light border-b">
                        <th className="px-4 py-6">N° Requisição</th>
                        <th className="px-4 py-6">Criação</th>
                        <th className="px-4 py-6 ">Origem</th>
                        <th className="px-4 py-6">Tipo de Manutenção</th>
                        <th className="px-4 py-6">Sistema</th>
                        <th className="px-4 py-6">Unidade</th>
                        <th className="px-4 py-6 ">Solicitante</th>
                        <th className="px-4 py-6">Programação</th>
                        <th className="px-4 py-6">Historico</th>
                        <th className="px-4 py-6">Status</th>
                        <th className="px-4 py-6">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <Row key={item.id} item={item} index={index} onProgramClick={onProgramClick} />
                        )) 
                    ) : (
                        <tr>
                            <td colSpan="11" className="p-2 text-center text-primary-dark">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
};

export default Table;