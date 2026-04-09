export default function Catalogo({ produtos }) {
  return (
    <ul>
      {produtos.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
