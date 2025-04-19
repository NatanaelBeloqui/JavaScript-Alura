const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
];

function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return 'Id não encontrado.';
}

console.log(encontrarFuncionarioPorId(201));

// function encontrarFuncionarioPorId(idFuncionario) {

//     let resultado = 0;
  
//     departamentos.forEach((indice) => {
//       const localizacao = indice.funcionarios.filter((valor) => valor.id === idFuncionario);
//       if (localizacao.length > 0) {
//         resultado = localizacao;
//       } else {
//         return 'ID não encontrado';
//       }
//     });
  
//     return resultado;
// }


// const array = [1,2,3,4,5,6,7,8,9,10];

// for (const i of array) {
//     console.log(i);
// };


// array.forEach((i) => console.log(i));