import { useContext } from "react";
import ListaItens from "./Pedido/ListaItens";
import "./ConfCss.css";
import SemPedidos from "./Pedido/SemPedidos";
import { CartContext } from "../context/CartContext";

export default function Confirmacao() {

  const { carrinho, ChangeQuantity } = useContext(CartContext);

  return (
      <>
        {carrinho.some((item) => item.Quantidade > 0) ? (
          <div className="AlignConfirm">
            <h1>Confirme todos os items do pedido!</h1>
            <ul className="ListaItensPedido">
              {carrinho.map((item) =>
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
        ) : (
          <SemPedidos />
        )}
      </>
  );
}
