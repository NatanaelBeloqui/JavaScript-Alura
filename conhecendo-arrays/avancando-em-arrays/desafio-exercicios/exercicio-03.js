const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

function fusaoDeArrays (...arrays) {
    return arrays.flat(Infinity);
}

function tirarRepeticoes(array) {
    return [...new Set(array)];
}

console.log(tirarRepeticoes(fusaoDeArrays(coresLista1, coresLista2)));