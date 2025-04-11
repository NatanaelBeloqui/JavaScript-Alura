const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

// notas.forEach(function (nota) {
//     somaDasNotas += nota;
// })

notas.forEach(somaNotas);

function somaNotas (nota) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`)