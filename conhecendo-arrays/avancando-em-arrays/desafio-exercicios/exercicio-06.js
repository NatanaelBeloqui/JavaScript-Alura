function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0);
}
  
const listaNumeros = [1, 2, 3, 4, 5];
const somaTotal = somaElementosDoArray(listaNumeros);
console.log(somaTotal);