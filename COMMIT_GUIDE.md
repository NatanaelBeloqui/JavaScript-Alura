📁 COMMIT_GUIDE.md
markdown
CopiarEditar
# 📘 Guia de Boas Práticas para Commits

Este projeto segue o padrão **Conventional Commits** para manter um histórico claro e organizado.

## 📌 Estrutura do Commit

<tipo>: <mensagem curta no imperativo>
makefile
CopiarEditar

**Exemplo:**
feat: adiciona função que extrai parte de array com slice()
yaml
CopiarEditar

---

## 🛠 Tipos mais usados

| Tipo       | Uso                                               |
|------------|----------------------------------------------------|
| `feat`     | Nova funcionalidade, exercício ou melhoria         |
| `fix`      | Correção de bugs ou comportamentos errados         |
| `refactor` | Refatoração de código sem alterar comportamento    |
| `style`    | Mudanças de estilo (indentação, ponto e vírgula...)|
| `test`     | Adição ou alteração de testes                      |
| `docs`     | Atualização de comentários ou arquivos de documentação |
| `chore`    | Tarefas que não afetam o código fonte diretamente  |

---

## 🧠 Dicas de escrita

- Sempre use verbos no **imperativo** (ex: `adiciona`, `corrige`, `melhora`)
- Seja claro e direto. Evite frases muito longas.
- Use **português** ou **inglês**, mas seja consistente no projeto.

---

## 💡 Exemplos úteis

```bash
feat: resolve exercício sobre uso de slice()
fix: corrige lógica de verificação de número primo
refactor: simplifica função de soma com reduce()
docs: adiciona explicação no README sobre o projeto
style: remove espaços extras e organiza indentação