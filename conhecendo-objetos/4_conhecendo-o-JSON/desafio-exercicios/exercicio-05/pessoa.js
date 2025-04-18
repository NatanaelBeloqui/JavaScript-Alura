const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copiarObjetoJson (objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

const pessoaCopia = copiarObjetoJson(pessoaOriginal);

pessoaCopia.nome = 'BRKsEDU';

console.log(pessoaOriginal);
console.log(pessoaCopia);