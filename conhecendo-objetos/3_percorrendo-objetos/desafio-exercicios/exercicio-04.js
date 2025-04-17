const carro = {

    marca: 'Mercedes',
    modelo: 'AMG-GT',
    ano: '2021',
    cor: 'Azul',
    ligado: false
};

const carroNovo = {
    marca: 'Renault',
    modelo: 'Sandero Stapway',
    ano: '2022',
    cor: 'Cinza Escuro'
};

const carroComNovosDetalhes = {...carro, ...carroNovo};

console.log(carroComNovosDetalhes);

// console.log("\nCarro com Detalhes Modificados:");
// console.log(carroComNovosDetalhes);