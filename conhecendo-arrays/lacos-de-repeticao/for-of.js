const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaDasNotas = 0;

// Serve para passar na array inteira
for (let nota of notas) { //Pega o elemento do índice. Não pega mais o índice.
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`A nota das média é ${media}.`);