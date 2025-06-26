import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'true') {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
    }
}
