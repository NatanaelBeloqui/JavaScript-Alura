import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helper.js';

const caminhoArquivo = process.argv; // Captura os argumentos passados na linha de comando ao executar o script
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro; // Lança o erro para o catch
        const resultado = contaPalavras (texto);
        criaESalvaArquivo(resultado, endereco);
    } catch (erro) {
        trataErros(erro);
    }
})

// async function criaESalvaArquivo (listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try {
//         await fs.promises.writeFile(arquivoNovo, textPalavras);
//         console.log('Arquivo criado');
//     } catch (erro) {
//         throw erro;
//     }
// }

function criaESalvaArquivo (listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);

    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then (() => {
            console.log('Arquivo criado');
        })
        .catch ((erro) => {
            throw erro;
        })
        .finally (() => console.log('Operação finalizada'))
        // Normalmente é para encerrar conexão com o Banco de Dados

}