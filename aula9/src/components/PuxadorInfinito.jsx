import { useState, useEffect } from "react";

export default function PuxadorInfinito() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDados(["Conta 001", "Conta 002", "Conta 003", "Conta 004"]);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return <div>{dados.length}</div>;
}