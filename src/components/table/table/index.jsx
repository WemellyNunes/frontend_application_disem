import Row from "../rows";

const Table = ({ filteredData, onProgramClick }) => {
    return (
        <div className="flex h-full overflow-auto bg-white mt-1"> {/* w-full para ocupar a largura completa */}
            <table className="flex flex-col w-full"> {/* min-w-full para ajustar largura */}
                <thead>
                    <tr className="flex flex-row justify-between text-center items-center bg-white text-primary-light text-sm">
                        <th className="flex p-6 font-medium text-center">Requisição</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Criação</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Origem</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Tipo de Manutenção</th>
                        <th className="flex px-4 py-6 font-medium text-center">Sistema</th>
                        <th className="px-4 py-6 font-medium text-center">Unidade</th>
                        <th className="hidden md:flex p-6 font-medium text-center min-w-[120px]">Solicitante</th>
                        <th className="px-4 py-6 font-medium text-center">Programação</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Historico</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Status</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Priori.</th>
                        <th className="hidden md:flex p-6 font-medium text-center">Ação</th>
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