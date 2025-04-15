const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: null
};

livro.avaliacao === null ? livro.avaliacao = {nota: 4.5, comentario: 'Ótima leitura'} : console.log('Já tem avaliação');
livro.avaliacao === null ? livro.avaliacao = {nota: 4, comentario: 'Ótima leitura'} : console.log('Já tem avaliação');

console.log();
console.log(livro);

