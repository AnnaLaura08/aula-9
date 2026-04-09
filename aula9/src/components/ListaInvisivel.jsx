export default function ListaInvisivel() {
const compras = ["Ovo", "Leite", "Pão"];

return (
    <ul style={{ display: "none" }}>
        {compras.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);
}