const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) { // includes faz uma busca no array inteiro
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno); // indexOf funciona da mesma forma que o typeOf, só que serve para mostrar o índice
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log('Aluno não encontrado.');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');