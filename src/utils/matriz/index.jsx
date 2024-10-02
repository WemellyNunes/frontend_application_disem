const pesosClasse = {
    A: 3,
    B: 2,
    C: 1,
};

const pesosRisco = {
    risco_acidentes: 17,
    integridade_estrutural: 16,
    sistemas_prevencao: 15,
    acessibilidade: 14,
    normas_seguranca: 13,
    corte_energia: 12,
    recurso_hidrico: 11,
    qualidade_ar: 10,
    equipamentos_caros: 9,
    instalacoes: 8,
    residuos: 7,
    retrofit: 6,
    despesas: 5,
    danos_maiores: 4,
    conforto_usuario: 3,
    estetica: 2,
    sustentabilidade: 1
};

export const calcularValorRisco = (classe, indiceRisco) => {
    const pesoClasse = pesosClasse[classe];
    const pesoIndice = pesosRisco[indiceRisco];
    
    return pesoClasse * pesoIndice;
};

export const calcularPrioridade = (valorRisco) => {
    if (valorRisco > 45){
        return 'Execução Imediata';
    }
    if (valorRisco >= 35) {
        return 'Execução em até 7 dias';
    } 
    if (valorRisco >= 25) {
        return 'Execução em até 15 dias';
    } 
    return 'Execução em até 30 dias';
};
