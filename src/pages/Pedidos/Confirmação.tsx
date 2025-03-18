import { useContext, useState } from "react";
import ListaItens from "../../components/Pedido/ListaItens";
import Main from "../../components/Main";
import ItemPedido from "../../types/ItemPedidoType";
import "./AppPedidos.css";
import SemPedidos from "../../components/Pedido/SemPedidos";
import { CartContext } from "../../context/CartContext";

export default function Confirmacao() {
  const {carrinho} = useContext(CartContext)

  const [ItensCarrinho, setItensCarrinho] = useState<ItemPedido[]>(carrinho);

  function ChangeQuantity(metodo: string, IdItem: number) {
    setItensCarrinho((prevItens) =>
      prevItens.map((item) =>
        item.ID === IdItem
          ? {
              ...item,
              Quantidade:
                metodo === "menos"
                  ? Math.max(item.Quantidade - 1, 0)
                  : item.Quantidade + 1,
            }
          : item
      )
    );
  }

  return (
    <Main>
      <div className="MainConfirm">
        
        <section className="ConfirmSec">
          {ItensCarrinho.some((item) => item.Quantidade > 0) ?
            (<div  className="AlignConfirmDiv">
              <h1>Confirme todos os items do pedido!</h1>
              <ul className="ListaItensPedido">
              {ItensCarrinho.map((item) =>
                item.Quantidade > 0 ? (
                      <div key={item.ID} className="ItemDivConf">
                        <button
                          className="MinusBtt"
                          onClick={() => ChangeQuantity("menos", item.ID)}
                        >
                          -
                        </button>

                        <ListaItens Item={item} />

                        <button
                          className="PlussBtt"
                          onClick={() => ChangeQuantity("mais", item.ID)}
                        >
                          +
                        </button>
                      </div>
                ) : null
              )}
              </ul>

                <button className="BTTconclu">Confirmar pedido!</button>
              
              </div>
            ) : (<SemPedidos />)}
        </section>
        
      </div>
    </Main>
  );
}
