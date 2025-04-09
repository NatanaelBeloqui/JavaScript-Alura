// Temos uma variável que está armazenando uma função
const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));


// Diferente das funções normais, as expressões são executadas a partir da declaração. Tudo o que vem depois não é reconhecido.