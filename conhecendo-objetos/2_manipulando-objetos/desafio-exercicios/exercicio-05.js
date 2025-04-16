const contaBancaria = {
    titular: 'Natanael',
    saldo: 1000000,
    depositar: function (valor) {
        if (valor > 0) {
            this.saldo += valor
            return console.log(`R$${valor} adicionado ao saldo. Novo saldo: R$${this.saldo}`);
        } else if (valor === 0) {
            return console.log('Nenhum valor adicionado ao saldo.')
        } else {
            return console.log('Valor inválido.');
        }
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return console.log(`R$${valor} retirado do saldo. Novo saldo: R$${this.saldo}.`);
        } else {
            return console.log('Saldo insuficiente.');
        }
    }
}

const cliente = {
    nome: 'BRKsEDU',
    conta: contaBancaria
}

function mostrarSaldo (cliente) {
    console.log(`O saldo do ${cliente.nome} é ${cliente.conta.saldo}`)
}

console.log(cliente.conta.saldo);
cliente.conta.depositar(50);
console.log(cliente.conta.saldo);
cliente.conta.sacar(50)
console.log(cliente.conta.saldo);

mostrarSaldo(cliente);