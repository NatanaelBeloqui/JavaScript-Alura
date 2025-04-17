const animais = require('./animais.json');

// console.log(animais);

// const animaisObjeto = JSON.parse(animais); // Isso dá erro, porque o JS já faz uma conversão automática para objeto quando é importado.
// console.log(animaisObjeto);

const animalNovo = {
    "id": 4,
    "nome": "Gato",
    "tipo": "Mamífero",
    "habitat": "Casa das pessoas"
}

animais.animais.push(animalNovo)

// console.log(animais);

const animalParaModificar = animais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

// console.log(animais);

const indiceAnimalRemover = animais.animais.findIndex((animal) => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    animais.animais.splice(indiceAnimalRemover, 1);
}

const animaisString = JSON.stringify(animais);

// console.log(animais);

console.log(animaisString);