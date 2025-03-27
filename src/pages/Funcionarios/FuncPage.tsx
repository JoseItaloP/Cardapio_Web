import MainFunc from '../../components/Funcionario/MainFunc/MainFunc'
import PedidosFeitos from '../../components/Funcionario/PedidosFeitos'
import './AppFuncionarios.css'

export default function FuncPage() {
  return (
    <MainFunc>
      <h1>Pagina Main dos funcionarios</h1>
      <button className='BttEditor'>Ir para editor de pratos e conjuntos</button>
      <PedidosFeitos />
    </MainFunc>
  )
}

