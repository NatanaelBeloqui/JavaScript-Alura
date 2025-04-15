const estudantes = require('../4_conhecendo-o-JSON/estudantes.json');

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

console.log(ordena(estudantes, 'nome'));