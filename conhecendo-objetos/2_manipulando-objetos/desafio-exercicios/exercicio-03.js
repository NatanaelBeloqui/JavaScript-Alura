const pessoas = [
    {nome: 'Natanael', idade: 20, cidade: 'Joinville'},
    {nome: 'BRKsEDU', idade: 46, cidade: 'Joinville'},
    {nome: 'IA Go', idade: 12, cidade: 'Joinville'}
]

function mostrarInfoPessoa (lista) {
    const pado =  lista.forEach((pessoa) => console.log(`\nNome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nCidade: ${pessoa.cidade}`));
}

function filtrarPorCidade (lista, cidade) {
    const pado = lista.filter((informacao) => informacao.cidade === cidade);
    console.log(pado);
}

pessoas.push({nome: 'Djalma', idade: 200, cidade: 'Kun-Lun'});

// mostrarInfoPessoa(pessoas);

filtrarPorCidade(pessoas, 'Kun-Lun');

console.log()