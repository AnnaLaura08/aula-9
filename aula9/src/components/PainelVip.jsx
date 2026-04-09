export default function Catalogo({ isVip }) {
    return (
        <div>
            <h2>Renzerizacao Condicional Proibida</h2>
            {isVip ? <p>Bem-vindo, cliente VIP!</p> : <p>Bem-vindo, cliente comum!</p>}
        </div>
    )
}