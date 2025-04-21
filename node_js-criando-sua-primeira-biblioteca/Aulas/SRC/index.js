export function contaPalavras (texto) {
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