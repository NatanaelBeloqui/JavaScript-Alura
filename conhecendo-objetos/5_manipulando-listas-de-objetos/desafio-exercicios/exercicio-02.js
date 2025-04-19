const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno (ano) {
    const filmesDoAno = catalogoFilmes.filter((filme) => ano === filme.anoLancamento);
    if (filmesDoAno.length > 0 ) {
        return filmesDoAno;
    } else {
        return 'Não há filmes nesse ano.';
    }
}

console.log(filtrarFilmesPorAno(2011));