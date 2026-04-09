export default function PainelAlunos() {
  const alunos = [
    { id: 1, nome: "Felipe" },
    { id: 2, nome: "Ana" },
  ];

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
}