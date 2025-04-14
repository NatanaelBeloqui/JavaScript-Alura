const numeros = [1,2,3,4,5,6,7,8,9,10];

function filtraNumerosPares (array) {
    return array.filter((num) => num % 2 === 0);
}

const listaNumerosPares = filtraNumerosPares(numeros);
console.log(listaNumerosPares);