const pesosClasse = {
    A: 3,
    B: 2,
    C: 1,
};

const pesosRisco = {
    riscoAcidentes: 17,
    integridade: 16,
    sistemas: 15,
    acessibilidade: 14,
    normasseguranca: 13,
    corteenergia: 12,
    recurso_hidrico: 11,
    qualidadeAr: 10,
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
    const pesoClasse = pesosClasse[classe] || 0; // Usando 0 como fallback
    const pesoIndice = pesosRisco[indiceRisco] || 0; // Usando 0 como fallback

    console.log(`Classe: ${classe}, Peso Classe: ${pesoClasse}, Índice de Risco: ${indiceRisco}, Peso Índice: ${pesoIndice}`);

    const valorRisco = pesoClasse * pesoIndice;
    console.log(`Valor de Risco Calculado: ${valorRisco}`);

    return valorRisco;
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
