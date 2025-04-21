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

// Expressão regular
// /[.,\/#!$%\^&\*;:{}=\-_`~()]/g

function quebraEmParagrafos (texto) {
    const paragrafos = texto.toLowerCase().split('\n'); // Transforma o texto em uma array de string, só que por parágrafo
    // const contagem = paragrafos.flatMap((paragrafo) => {
    //     if (!paragrafo) return [];
    //     return verificarPalavrasDuplicadas(paragrafo);
    // });
    const contagem = paragrafos.reduce((acum, paragrafo) => {
        if (paragrafo) {
            return [...acum, paragrafo];
        }
        return acum;
    }, []);
    console.log(contagem);
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