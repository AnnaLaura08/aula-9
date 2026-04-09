export default function AlertaPerigoso() {
  const dispararMisseis = () => alert("💥 Mísseis lançados!");

  return (
    <div>
      <h1>Alerta Perigoso</h1>
      <button onClick={dispararMisseis}>Disparar Misseis</button>
    </div>
  );
}