const estudantes = require('../4_conhecendo-o-JSON/estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor) ) // find() é um método de array. É um método callback para passar na array inteira // includes() serve para verificar se o item está dentro do objeto ou do array.
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);
const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '11981123183');
console.log(telefoneEstudante);