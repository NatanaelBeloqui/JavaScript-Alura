const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) { // includes faz uma busca no array inteiro
        const indice = lista[0].indexOf(aluno); // indexOf funciona da mesma forma que o typeOf, só que serve para mostrar o índice
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log('Aluno não encontrado.');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');