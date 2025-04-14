function executaOperacaoEmArray(array, funcao) {
    return array.map(funcao);
}

// (num) => num * 2

function multiplicarPorDois (num) {
    return num * 2;
}

const numeros = [1,2,3,4,5];

console.log(executaOperacaoEmArray(numeros, multiplicarPorDois));