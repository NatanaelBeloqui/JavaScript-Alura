const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}

estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: '' // Null também serve // Strings vazias são consideradas falsy
})

console.log(estudante.endereco);
console.log(estudante.endereco[0]);
console.log(estudante.endereco[1]);

const listsEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento) // Falsy e truthy