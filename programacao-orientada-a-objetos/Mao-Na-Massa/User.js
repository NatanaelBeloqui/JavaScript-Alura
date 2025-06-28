class User {
  #nome;
  #sobrenome;
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role;
    this.#ativo = ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Formato não válido");
    }
    let [nome, ...sobrenome] = novoNome.split(" ");
    sobrenome = sobrenome.join(" ");
    this.#nome = nome;
    this.#sobrenome = sobrenome;
  }

  get nome() {
   return `${this.#nome} ${this.#sobrenome}`
 }
}

const novoUser = new User("Juliana", "Souza", "j@j.com", "2021-01-01");
console.log(novoUser.nome);

novoUser.nome = "Juliana Silva Souza";

console.log(novoUser.nome);