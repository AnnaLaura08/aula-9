import { useState } from "react";

export default function AtualizaOcupacao() {
  const [form, setForm] = useState({ nome: "Jonas", empresa: "" });

  const alterarEmpresa = () => {
    setForm({ ...form, empresa: "SENAI" });
  }
return <button onClick={alterarEmpresa}>Mudar Empresa</button>;
}