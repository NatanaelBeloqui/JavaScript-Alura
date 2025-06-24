/*
  Imagine que você tem uma função como se fosse um guia turístico. E esse guia sempre carrega uma mochila com informações, tipo nome, email, etc. O que está dentro da mochila depende de quem é o dono da função — ou melhor, depende de quem é o this.

  Mas... e se você quiser que esse guia trabalhe com a mochila de outra pessoa? Aí entram os métodos call(), apply() e bind().
*/

/*
Método | Quando é usado? | O que faz?
call() | Executa a função imediatamente com um this e parâmetros separados por vírgula | Aluga a mochila de outro
apply()	Igual ao call(), mas os parâmetros vêm em um array | Aluga a mochila de outro, mas com lista pronta
bind()	Não executa a função agora, só devolve outra função com o this fixado	Cola a mochila no guia pra sempre
*/

// Função principal
function apresentar(cidade, hobby) {
    console.log(`Oi! Eu sou ${this.nome}, email: ${this.email}, moro em ${cidade} e gosto de ${hobby}.`)   ;
}

// Objeto 1
const pessoa = {
    nome: 'João',
    email: 'joao@email.com'
};

// Objeto 2
const outraPessoa = {
    nome: 'Carla',
    email: 'carla@email.com'
};

// usando call()
apresentar.call(pessoa, 'São Paulo', 'futebol');
// -> Oi! Eu sou João, email: joao@email.com, moro em São Paulo e gosto de futebol.

// usando apply()
apresentar.apply(outraPessoa, ['Rio de Janeiro', 'ler livros']);
// -> Oi! Eu sou Carla, email: carla@email.com, moro em Rio de Janeiro e gosto de ler livros.

// usando bind() - Ele não executa imadiatamente. Precisa armazenar em algum lugar para mostrar
const apresentarCarla = apresentar.bind(outraPessoa, 'Salvador', 'cozinhar');
apresentarCarla(); // -> Aqui apresenta a carla


/*
  call: Você liga pro guia e já dá as infos por telefone. "Oi, vai com a mochila da Carla e diz que ela mora no Rio!"

  apply: Você manda uma lista por mensagem com as infos. "Oi, vai com a mochila da Carla e segue essa lista!"

  bind: Você contrata o guia e entrega a mochila pra ele, mas ele só vai falar quando você pedir. "Toma essa mochila da Carla, quando te chamarem, usa ela!"
*/