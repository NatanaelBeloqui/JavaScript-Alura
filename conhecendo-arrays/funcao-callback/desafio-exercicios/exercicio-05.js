const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(numero => {
  const resultado = numero * 3;
  console.log(resultado);
});

const indiceDoNumero18 = numeros.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}