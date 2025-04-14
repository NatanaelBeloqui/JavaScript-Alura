function filtraNumeros (array) {
    return array.filter((num) => num % 3 === 0 && num > 5);
}

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(filtraNumeros(numeros));