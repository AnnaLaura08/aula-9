export default function CartaoUsuario({ nomePerfil, idade }) {
  return (
    <div className="CartaoUsuario">
      <h1>{nomePerfil}</h1>
      <p>{idade} anos</p>
    </div>  
  )
}