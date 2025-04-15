const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954
};

console.log(`Detalhes do Livro:
    Título: ${livro['titulo']}
    Autor: ${livro['autor']}
    Ano de Publicação: ${livro['anoPublicacao']}
    Gênero: ${livro['genero']}
    Idade da Publicação: ${livro['idadePublicacao']} anos`
)