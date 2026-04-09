import styles from './App.module.css'
import CartaoUsuario from './components/CartaoUsuario'
import ContadorTravado from './components/ContadorTravado'
import ListaInvisivel from './components/ListaInvisivel'
import PainelAlunos from './components/PainelAlunos'
import ListagemAntiga from './components/ListagemAntiga'
import AlertaPerigoso from './components/AlertaPerigoso'
import BuscaSegura from './components/BuscaSegura'
import AtualizarOcupacao from './components/AtualizarOcupacao'
import BuscaAtenta from './components/BuscaAtenta'
import CaixaVermelho from './components/CaixaVermelho'
import Catalogo from './components/Catalogo'
import DepositoDuplo from './components/DepositoDuplo'
import Mural from './components/Mural'
import PainelVip from './components/PainelVip'
import PuxadorInfinito from './components/PuxadorInfinito'
import TitulosDuplos from './components/TitulosDuplos'

function App() {
  const produtosCatalogo = [
    'Teclado',
    'Mouse',
    'Monitor',
    'Cadeira Gamer'
  ];

  return (
    <main className={styles.container}>
      <CartaoUsuario nomePerfil="Jonas" idade={19} />
      <ContadorTravado />
      <ListaInvisivel />
      <PainelAlunos />
      <ListagemAntiga />
      <AlertaPerigoso />
      <BuscaSegura />
      <AtualizarOcupacao />
      <CaixaVermelho />
      <Catalogo produtos={produtosCatalogo} />
      <DepositoDuplo />
      <Mural />
      <PainelVip />
      <PuxadorInfinito />
      <TitulosDuplos />
    </main>
  )
}

export default App