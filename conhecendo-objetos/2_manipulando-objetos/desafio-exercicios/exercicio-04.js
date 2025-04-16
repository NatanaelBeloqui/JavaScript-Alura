const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        return b !== 0 ? a / b : null;
    },
    calcularMedia: function(array) {
        let total = 0;
        array.forEach((elemento) => total += elemento);
        return total / array.length;
    }
}

const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(calculadora.soma(9,3));
console.log(calculadora.subtracao(9,3));
console.log(calculadora.multiplicacao(9,3));
console.log(calculadora.divisao(9,3));
console.log(calculadora.calcularMedia(numeros));