import { useState, useEffect } from "react";

export default function PuxadorInfinito() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://api.banco.com/dados")
      .then(res => res.json())
      .then(info => setDados(info))
  }, []);

  return <div>{dados.length}</div>;
}