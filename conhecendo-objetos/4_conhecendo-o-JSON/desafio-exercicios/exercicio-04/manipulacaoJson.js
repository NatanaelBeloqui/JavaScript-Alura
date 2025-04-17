const animais = require('./animais.json');

console.log(animais);

// const animaisObjeto = JSON.parse(animais); // Isso dá erro, porque o JS já faz uma conversão automática para objeto quando é importado.

console.log(animaisObjeto);

const animalNovo = {
    "id": 4,
    "nome": "Gato",
    "tipo": "Mamífero",
    "habitat": "Casa das pessoas"
}

animais.animais.push(animalNovo)

console.log(animais);