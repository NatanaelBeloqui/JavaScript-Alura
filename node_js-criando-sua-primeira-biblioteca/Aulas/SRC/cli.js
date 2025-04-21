import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv; // Captura os argumentos passados na linha de comando ao executar o script
const link = caminhoArquivo[2]; // "arquivos/texto.txt"

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        contaPalavras (texto);
    } catch (erro) {
        trataErros(erro);
    }
});