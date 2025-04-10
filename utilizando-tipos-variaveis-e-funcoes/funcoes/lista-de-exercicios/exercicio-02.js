function verificarIdade(idade) {
    if (idade >= 18) {
        return 'É maior de idade.'
    } else {
        return 'É menor de idade'
    }
}

const idade = 20;

console.log(verificarIdade(idade));