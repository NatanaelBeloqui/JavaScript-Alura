const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

/*
Object.assign(target, ...sources)


target (objeto) – O objeto de destino que receberá as propriedades.

sources (um ou mais objetos) – Um ou mais objetos de origem cujas propriedades serão copiadas.


Descrição:

As propriedades dos objetos sources são copiadas para o objeto target, na ordem em que são passadas.

Se duas ou mais fontes tiverem a mesma chave, a última sobrepõe as anteriores.

Apenas propriedades enumeráveis e próprias (não herdadas) são copiadas.

Retorna o próprio target.
*/