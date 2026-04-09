import { useState } from "react";

export default function ContadorTravado() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Total de Cliques: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}
''