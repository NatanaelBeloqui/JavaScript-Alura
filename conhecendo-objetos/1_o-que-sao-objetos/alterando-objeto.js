const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

console.log(estudante.telefone);

estudante.telefone = '551199999999'; // Cria a propriedade no objeto

console.log(estudante.telefone);
console.log(estudante);

estudante.nome = 'José Souza'; // Altera a propriedade no objeto

const estudante2 = {};
estudante2.nome = 'Ana Maria';
