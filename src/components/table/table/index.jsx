import Row from "../rows";

const Table = ({ filteredData, onProgramClick }) => {
    return (
        <div className="overflow-x-auto h-full bg-white mx-1.5 md:mx-0 mt-1">
            <table className="min-w-full table-auto overflow-x-auto ">
                <thead >
                    <tr className="bg-white text-primary-light text-xs md:text-base border-b">
                        <th className="px-4 py-6 font-medium">N° Requisição</th>
                        <th className="px-4 py-6 font-medium">Criação</th>
                        <th className="px-4 py-6 font-medium ">Origem</th>
                        <th className="px-4 py-6 font-medium">Tipo de Manutenção</th>
                        <th className="px-4 py-6 font-medium">Sistema</th>
                        <th className="px-4 py-6 font-medium">Unidade</th>
                        <th className="px-4 py-6 font-medium ">Solicitante</th>
                        <th className="px-4 py-6 font-medium">Programação</th>
                        <th className="px-4 py-6 font-medium">Historico</th>
                        <th className="px-4 py-6 font-medium">Status</th>
                        <th className="px-4 py-6 font-medium">Priori.</th>
                        <th className="px-4 py-6 font-medium">Ação</th>
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