const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    // enderecos: [{
    //     rua: 'Rua Joseph Climber',
    //     numero: '45',
    //     complemento: 'apto 43'
    // },
    // {
    //     rua: 'Rua Dona Clotilde',
    //     numero: '71',
    //     complemento: ''
    // }]
}

const chavesObjeto = Object.keys(estudante); // Devolve um array com uma lista de chaves
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado.')
}