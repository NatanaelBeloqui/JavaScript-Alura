export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  criarPerfil() {}

  apagarPerfil() {}

  exibirInfos() {}

  exibirListaCursos() {}

  matricularEmCurso() {}

  exibirCursosMatriculados() {}
}
