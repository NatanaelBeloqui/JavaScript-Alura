const carro = {
    marca: 'Mercedes',
    modelo: 'AMG-GT',
    ano: '2021',
    cor: 'Azul',
    valor: 4100000
}

for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

