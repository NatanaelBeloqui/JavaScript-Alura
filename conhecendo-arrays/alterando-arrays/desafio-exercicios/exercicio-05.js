// const matriz = [
//     [1,2,3], -> 0
//     [4,5,6], -> 1
//     [7,8,9]  -> 2
// ]

const matriz = []
let contador = 1;

for(let i = 0; i < 3; i++) {
    let linha = []
    for(let j = 0; j < 3; j++) {
        linha.push(contador);
        contador ++;
    }
    matriz.push(linha);
    console.log(matriz[i]);
}




// ALTERNATIVA -> RESOLUÇÃO DA ALURA


// let matriz = [];
// let valorInicial = 1;

// for (let i = 0; i < 3; i++) {
//   let linha = [];
//   for (let j = 0; j < 3; j++) {
//     linha.push(valorInicial++);
//   }
//   matriz.push(linha);
// }

// console.log('Matriz de duas dimensões:');
// // console.log(matriz);
// matriz.forEach(row => console.log(row)); // visualização em linhas e colunas