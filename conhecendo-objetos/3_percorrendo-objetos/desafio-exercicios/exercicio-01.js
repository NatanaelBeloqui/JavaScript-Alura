const pessoa = {
    nome: 'Ísis',
    notas: [8,7,10,9],
    media: null,


    calcularMediaNotas: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2); // Arredondando para duas casas decimais
      },

    classificarDesempenho: function () {
        const media = this.calcularMediaNotas();
    
        if (media >= 9) {
          return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
          return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
          return 'Desempenho regular';
        } else {
          return 'Desempenho insuficiente';
        }
      }

}

// Calculando e exibindo a média de notas
const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);

// Classificando o desempenho e exibindo a categoria
const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);