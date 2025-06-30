export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("formato do nome não é válido");
    }
    this.#nome = novoNome;
  }

  // exibirInfos() {
  //   return `${objUser.nome}, ${objUser.email}`;
  // }

  exibirInfos() {
    if (this.role === "Estudante") {
      return `Dados estudante: ${this.nome}`;
    }
    if (this.role === "Admin") {
      return `Dados admin: ${this.nome}, ${this.role}`
    }
    if (this.role === "Docente") {
      return `Dados docente: ${this.nome}, ${this.email}`
    }
  }

  static exibirInfosGenericas(nome, email) {
    return `${nome}, ${email}`;
  }
}
