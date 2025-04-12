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
console.log(matriz[1][2]);