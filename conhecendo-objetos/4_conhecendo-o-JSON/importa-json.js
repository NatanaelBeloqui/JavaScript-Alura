// import estudante from './estudante.json'; // Mesma coisa que a linha debaixo
const estudante = require('./estudante.json');

// console.log(estudante);
// console.log(typeof estudante); // Objetc

const chaves = Object.keys(estudante);
console.log(chaves);
