const carro = {

    marca: 'Mercedes',
    modelo: 'AMG-GT',
    ano: '2021',
    cor: 'Azul',
    valor: 4100000,
    ligado: false,
    placa: '55A6B',

    ligar: function () {
        return this.ligado = true;
    },

    desligar: function () {
        return this.ligado = false
    },

    obterDetalhes: function () {
        for (chave in carro) {
            const tipo = typeof carro[chave];
            if(tipo !== 'object' && tipo !== 'function') {
                if(chave === 'ligado' && this.ligado === false) {
                    console.log(`${chave}: desligado`);
                } else if (chave === 'ligado' && this.ligado === true) {
                    console.log(`${chave}: ligado`);
                } else {
                    console.log(`${chave}: ${carro[chave]}`);
                }
            }
        }
    }
}

Object.defineProperty(carro, 'placa', {
    value: '55A6B',
    enumerable: false // Isso faz com que a chave não seja enumerada
});

const chaves = Object.keys(carro);

// carro.obterDetalhes();
// console.log(chaves);

console.log(`A placa do carro é ${carro.placa}`);