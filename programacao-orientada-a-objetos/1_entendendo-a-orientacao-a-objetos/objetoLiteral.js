const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2024-01-01",
  role: "estudante",
  ativo: true, // por padrão
  exibirInfos: function() {
    console.log(this.nome, this.email);
  }
}