const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

// Notação de ponto

console.log(estudante.nome);
console.log(`O nome de estudante é ${estudante.nome}`);
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0,3)}`) // O método substring só funciona pra strigs. Ele seleciona onde vai começar a pegar as informações e onde para. [começa, termina[