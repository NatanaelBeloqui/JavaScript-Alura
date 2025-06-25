import User from "./User";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "Admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso() {}

  excluirCurso() {}

  desativarCurso() {}
}
