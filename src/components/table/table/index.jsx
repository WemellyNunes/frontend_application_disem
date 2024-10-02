import Row from "../rows";

const Table = ({ filteredData, onProgramClick }) => {
    return (
        <div className="overflow-x-auto h-full bg-white mx-1.5 md:mx-0 mt-1">
            <table className="min-w-full table-auto overflow-x-auto ">
                <thead >
                    <tr className="bg-white text-primary-light text-xs md:text-base">
                        <th className="px-4 py-6 font-normal">N° Requisição</th>
                        <th className="px-4 py-6 font-normal">Criação</th>
                        <th className="px-4 py-6 font-normal ">Origem</th>
                        <th className="px-4 py-6 font-normal">Tipo de Manutenção</th>
                        <th className="px-4 py-6 font-normal">Sistema</th>
                        <th className="px-4 py-6 font-normal">Unidade</th>
                        <th className="px-4 py-6 font-normal ">Solicitante</th>
                        <th className="px-4 py-6 font-normal">Programação</th>
                        <th className="px-4 py-6 font-normal">Historico</th>
                        <th className="px-4 py-6 font-normal">Status</th>
                        <th className="px-4 py-6 font-normal">Priori.</th>
                        <th className="px-4 py-6 font-normal">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <Row key={item.id} item={item} index={index} onProgramClick={onProgramClick} />
                        )) 
                    ) : (
                        <tr>
                            <td colSpan="11" className="p-2 text-center text-sm font-light text-primary-dark">
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