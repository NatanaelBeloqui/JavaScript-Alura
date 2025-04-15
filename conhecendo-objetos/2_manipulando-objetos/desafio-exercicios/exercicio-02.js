const pessoa = {
    nome: 'Natanael',
    idade: 20,
    solteiro: false,
    hobbies: [
        'Estudar',
        'Ler',
        'Jogar',
        'Conversar'
    ],
    endereco: {
        rua: 'Rua José Gomes de Freitas',
        numero: '106',
        cidade: 'Joinville',
        estado: 'Santa Catarina'
    }
}

function mostrarInfoPessoa (objeto) {
    console.log(`
        Informações do usuário:\n
        Nome: ${objeto.nome} -> ${typeof objeto.nome}
        Idade: ${objeto.idade} -> ${typeof objeto.idade}
        Solteiro: ${objeto.solteiro === true ? 'Sim' : 'Não. Bem casado.'} -> ${typeof objeto.solteiro}
        Hobbies: ${objeto.hobbies[0]}, ${objeto.hobbies[1]}, ${objeto.hobbies[2]}, ${objeto.hobbies[3]} -> ${typeof objeto.hobbies}
        Endereço: ${objeto.endereco.rua}, ${objeto.endereco.numero}, ${objeto.endereco.cidade}, ${objeto.endereco.estado}
    `)
}

mostrarInfoPessoa(pessoa);