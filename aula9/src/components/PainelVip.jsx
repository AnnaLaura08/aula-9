export default function PainelVip({ isVip }) {
  return (
    <div>
      <h2>Renzerizacao Condicional Proibida</h2>
      {isVip && <p>Você tem acesso ao lounge secreto!</p>}
    </div>
  );
}
