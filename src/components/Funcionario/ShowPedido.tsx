import PedidoType from "../../types/PedidoType";
import ItemPedidoFunc from "./ItemPedidoFunc";

export default function ShowPedido({ Pedido }: { Pedido: PedidoType }) {
  return (
    <>
      <h1 className="H1Pedido">Pedido de numero #{Pedido.ID}</h1>
      <section className="ItensBox">
        <h2>Itens</h2>
        <ul className="UlItens">
          <div className="ItensTag">
            <p>Nome</p>
            <p>Quantidade</p>
            <p>Valor</p>
          </div>
          {Pedido.ListaItens.map((Item) => (
            <ItemPedidoFunc Item={Item} key={Item.ID}/>
          ))}
        </ul>
      </section>
      <p className="ValorTotalPedido">
        Valor total: R${Pedido.ValorTotal.toFixed(2)}
      </p>
    </>
  );
}
