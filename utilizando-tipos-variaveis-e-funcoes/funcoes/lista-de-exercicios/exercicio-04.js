function verificarMaiorNumero(...numeros) {
    if (numeros.length === 0) {
        return 'Não há número para verificar';
    }
    const maiorNumero = Math.max(...numeros);
    return `O maior número é ${maiorNumero}.`;
}

// Solução compacta
// const verificarMaiorNumero = (...numeros) => Math.max(...numeros);

num = 2;
num2 = 4;

console.log(verificarMaiorNumero(num, num2));