console.log('');
console.log('ANTES');

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

matriz[2].splice(1, 1, 15);

console.log('');
console.log('DEPOIS ');
matriz.forEach(row => console.log(row));
console.log('');