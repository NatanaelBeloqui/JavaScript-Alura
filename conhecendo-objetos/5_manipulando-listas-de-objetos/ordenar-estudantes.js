const estudantes = require('../4_conhecendo-o-JSON/estudantes.json');

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

console.log(ordena(estudantes, 'nome'));


//  DECRESCENTE

// Após a ordenação da lista, podemos ajustar a implementação para inverter a ordem diretamente no método sort, considerando uma função que recebe um parâmetro indicando se a ordenação é crescente ou decrescente:

// function ordenar(lista, propriedade, decrescente = false) {
//     return lista.sort((a, b) => {
//         let valorA = a[propriedade];
//         let valorB = b[propriedade];

//         if (typeof valorA === 'string') {
//             valorA = valorA.toUpperCase();
//         }
//         if (typeof valorB === 'string') {
//             valorB = valorB.toUpperCase();
//         }

//         if (valorA < valorB) {
//             return decrescente ? 1 : -1;
//         }
//         if (valorA > valorB) {
//             return decrescente ? -1 : 1;
//         }
//         return 0;
//     });
// }

// // Exemplo de uso para ordenar de forma decrescente pelo nome
// const ordenadoNomeDecrescente = ordenar(clientes, "nome", true);