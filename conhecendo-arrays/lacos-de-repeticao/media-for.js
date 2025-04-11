const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`A nota das média é ${media}.`);