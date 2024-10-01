const Circle = ({ prioridade }) => {
    const prioridadeClasses = {
        'Execução Imediata': 'bg-red-500',
        'Execução em até 2 dias': 'bg-orange-400',
        'Execução em até 7 dias': 'bg-yellow-300',
        'Execução em até 15 dias': 'bg-green-400',
    };

    return (
        <div className={`w-2.5 h-2.5 rounded-full ${prioridadeClasses[prioridade]}`} />
    );
};

export default Circle;