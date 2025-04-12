const numeros = [1,2,3,4,5,6,7,8,9,10];

function imprimirElementos(array) {
    let soma = 0;
    for(let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    console.log(`A soma dos números do array é ${soma}`);
}

imprimirElementos(numeros);