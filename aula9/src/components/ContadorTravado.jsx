import { useState } from "react";
import CartaoUsuario from "./CartaoUsuario"
import ContadorTravado from "./ContadorTravado";
import ListaInvisivel from "./ListaInvisivel";
import PainelAlunos from "./PainelAlunos";
import ListagemAntiga from "./ListagemAntiga";
import AlertaPerigoso from "./AlertaPerigoso";
import BuscaSegura from "./BuscaSegura";

export default function App() {
    return (
        <div>
            <CartaoUsuario nomePerfil="Jonas" idade={19} />
            <ContadorTravado />
        </div>
    );
}


export default function ContadorTravado() {
    const [contador, setContador] = useState(0);

    return <button onClick={() => setContador(contador + 1)}>Contar</button>;
}
''