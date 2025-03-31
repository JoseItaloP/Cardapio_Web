import { Link } from 'react-router-dom'
import MainFunc from '../../components/Funcionario/MainFunc/MainFunc'
import PedidosFeitos from '../../components/Funcionario/PedidosFeitos'
import './AppFuncionarios.css'

export default function FuncPage() {
  return (
    <MainFunc>
      <h1>Pagina Main dos funcionarios</h1>
      <Link to={"/funcionario/edit"} className='BttEditor'>Ir para editor de pratos e conjuntos</Link>
      <PedidosFeitos />
    </MainFunc>
  )
}

