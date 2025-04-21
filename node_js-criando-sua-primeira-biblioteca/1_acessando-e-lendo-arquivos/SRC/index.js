const fs = require('fs'); // File System

const caminhoArquivo = process.argv; // Captura os argumentos passados na linha de comando ao executar o script
const link = caminhoArquivo[2]; // "arquivos/texto.txt"

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
    // verificarPalavrasDuplicadas(texto);
});

// criar um arrau com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// {
//     'web': 5,
//     'computador': 4
// }

function quebraEmParagrafos (texto) {
    const paragrafos = texto.toLowerCase().split('\n'); // Transforma o texto em uma array de string, só que por parágrafo
    const contagem = paragrafos.map((paragrafo) => {
        return verificarPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function verificarPalavrasDuplicadas (texto) {
    const listaPalavras = texto.split(' '); // Transforma o texto em uma array de string
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });
    return resultado;
}