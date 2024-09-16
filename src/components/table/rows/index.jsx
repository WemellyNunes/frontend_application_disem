const Row = ({ item, index }) => {
    
    const statusClasses = {
        'A atender': 'text-orange-500 bg-orange-100 rounded-full',
        'Em atendimento': 'text-blue-500 bg-blue-100 rounded-full',
        'Resolvido': 'text-green-500 bg-green-100 rounded-full',
        'Finalizada': 'text-blue-700 bg-blue-100 rounded-full',
        'Negada': 'text-red-500 bg-red-100 rounded-full'
    };

    return (
        <tr className={`text-center text-sm hover:bg-blue-50 text-primary-dark ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <td className="px-2 py-3">{item.requisicao}</td>
            <td className="p-2">{item.criacao}</td>
            <td className="p-2">{item.origem}</td>
            <td className="p-2">{item.tipo}</td>
            <td className="p-2">
                <a href="#" className="text-blue-500 underline">{item.sistema}</a>
            </td>
            <td className="p-2">{item.unidade}</td>
            <td className="p-2">{item.solicitante}</td>
            <td className="p-2">
                <div className={`py-2 ${statusClasses[item.status]}`}>
                    {item.status}
                </div>
            </td>
        </tr>
    );
};

export default Row;                                              