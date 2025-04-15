const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.mostrarDetalhes = `
    Detalhes do Livro:\n
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gêreno: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
`

console.log(livro.mostrarDetalhes);