const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); // Transforma todo o arquivo json em string

// console.log(stringEstudante);
// console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);