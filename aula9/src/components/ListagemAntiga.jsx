export default function ListagemAntiga() {
const itens = ["Espada", "Escudo", "Poção"]

return (
    <ul style={{ display: "block" }}>
        {itens.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);
}