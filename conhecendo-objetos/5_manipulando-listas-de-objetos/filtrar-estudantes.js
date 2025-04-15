const estudantes = require('../4_conhecendo-o-JSON/estudantes.json');

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade); // O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
        // É um método de objeto
    })
}

const listaEndereçosIncompletos = filtrarPorPropriedade(estudantes, 'cep');