const numeros = [1,2,3,4,5,6,7,8,9,10];

let numeroAleatorio = Math.floor((Math.random() * 20) + 1);

console.log(`O número gerado -> ${numeroAleatorio}`);
console.log();

if(numeros.includes(numeroAleatorio)) {
    numeros.map((num, indice) => {
        if(num === numeroAleatorio) {
            console.log(indice);
        }
    });
} else {
    console.log(-1);
}

console.log();