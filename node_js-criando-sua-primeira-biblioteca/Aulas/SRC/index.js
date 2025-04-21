// Expressão regular
// /[.,\/#!$%\^&\*;:{}=\-_`~()]/g

const fs = require('fs'); // File System

const caminhoArquivo = process.argv; // Captura os argumentos passados na linha de comando ao executar o script
const link = caminhoArquivo[2]; // "arquivos/texto.txt"

fs.readFile(link, 'utf-8', (erro, texto) => {
    if (erro) {
        console.log('Qual é o erro? ', erro.code);
        return
    }
    contaPalavras (texto);
});

function contaPalavras (texto) {
    const paragrafos = extraiParagrafos (texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos (texto) {
    return texto.toLowerCase().split('\n'); // Transforma o texto em uma array de string, só que por parágrafo
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificarPalavrasDuplicadas (texto) {
    const listaPalavras = texto.split(' '); // Transforma o texto em uma array de string
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}