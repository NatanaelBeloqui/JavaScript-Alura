const numeros = [1,2,3,4,5,6,7,8,9,10];

function imprimirElementos(array) {

    console.log(`O menor número é ${Math.max(...array)} e o maior número é ${Math.min(...array)}.`);

}

imprimirElementos(numeros);