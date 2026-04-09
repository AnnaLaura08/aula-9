export default function Catalogo({ produtos = [] }) {
  return (
    <ul>
      {produtos.map((item, index) => {
        const key = item?.id ?? item ?? index;
        const label = typeof item === "object" ? item.nome : item;

        return <li key={key}>{label}</li>;
      })}
    </ul>
  );
}
