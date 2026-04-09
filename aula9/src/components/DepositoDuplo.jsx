import { useState } from 'react';

export default function DepositoDuplo() {
const [dinheiro, setDinheiro] = useState(0);
const transferir = () => {
    (valorAntigo => valorAntigo + 100)(dinheiro);
    setDinheiro(dinheiro + 100);
}
return <button onClick={transferir}>Depositar</button>;
}