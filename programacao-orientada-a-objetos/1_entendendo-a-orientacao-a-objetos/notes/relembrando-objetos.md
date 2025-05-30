Paradigmas de programação:
-> Abordagens sobre como resolver problemas
de programação, baseadas em uma teoria ou
conjunto de princípios definidos

Orientação a Objetos:
-> Princípio de espelhar o mundo real
através de uma estrutura de objetos com
características e ações, que interagem
uns com os outros.

Exemplo básico de estrutura e abstração:

const gato = {
    nome: 'Churrumina',
    nascimento: '25/11/2018',
    pelagem: 'mesclada',
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    },

    miar: function() {
        console. log ( "miau" );
    }
}

Objetos literais: São objetos ÚNICOS. No geral, não são muito utilizados por não serem viáveies.

Um objeto literal é “único” no sentido de que guarda dados específicos, já definidos
(por exemplo, os dados de um produto) e não pode ser utilizado como classe para a
criação de outros objetos a partir dele.

Estrutura melhorada para ser reutilizada:

const modeloGato = {
        nome: stringNome,
        nascimento: stringData,
        pelagem: stringPelagem,
        status: {
            castrado: boolCastrado,
            vacinado: boo IVacinado,
            vermifugado: boolVermifugado
    }
}