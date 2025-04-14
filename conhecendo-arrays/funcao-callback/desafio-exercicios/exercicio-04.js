const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];
  
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todosAlunos.find(nome => nome === 'Ana Souza');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}