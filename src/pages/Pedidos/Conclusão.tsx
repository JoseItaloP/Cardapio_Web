
import ListaItens from "../../components/Conclusao/ListaItens";
import Main from "../../components/Main";
import ItemPedido from "../../types/ItemPedidoType";
import "./AppPedidos.css"


export default function Conclusão() {
  const ItensCarrinho: ItemPedido[] = [
    {
      ID: 0,
      Nome: 'TESTE 1',
      Quantidade: 1,
      Valor: 13.50,
      DescResulm: 'Resumo de teste 1',
      DescComp: 'Descrição completa de teste 1'
    },
    {
      ID: 1,
      Nome: 'TESTE 2',
      Quantidade: 3,
      Valor: 10.00,
      DescResulm: 'Resumo de teste 2, Resumo de teste 2',
      DescComp: 'Descrição completa de teste 2'
    },    
    {
      ID: 2,
      Nome: 'TESTE 3',
      Quantidade: 2,
      Valor: 15.00,
      DescResulm: 'Resumo de teste 3',
      DescComp: 'Descrição completa de teste 3'
    },
]
  return (
    <Main>
      <div className="MainConclu">
        <h1>Confirme todos os items do pedido!</h1>
        <section className="ConclusaoSec">
          <ul className="ListaItensPedido">
            {ItensCarrinho.map((item)=><ListaItens Item={item}/>)}
          </ul>
        </section>
        <button className="BTTconclu">Confirmar pedido!</button>
      </div>
    </Main>
  )
}
