console.log('');

const matriz = []
let contador = 1;

for(let i = 0; i < 3; i++) { // Coluna
    let linha = []
    for(let j = 0; j < 3; j++) { // Linha
        linha.push(contador);
        contador ++;
    }
    matriz.push(linha);
    console.log(matriz[i]);
}

console.log('');
console.log(`O elemento na segunda linha e terceira coluna da lista bidimensional matriz é ${matriz[1][2]}`);
console.log('');