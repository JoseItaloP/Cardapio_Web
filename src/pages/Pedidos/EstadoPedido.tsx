import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Main from "../../components/Main";
import { useParams } from "react-router-dom";
import PedidoType from "../../types/PedidoType";

export default function EstadoPedido() {
  const { pedido } = useParams();
  const { Pedidos } = useContext(CartContext);
  const [findPedido, setFindPedido] = useState<PedidoType>();

  useEffect(() => {
    const Encontrado = Pedidos.find((item) => item.ID == Number(pedido));
    if (Encontrado) {
      setFindPedido(Encontrado);
    }
    console.log("pedido: ", Encontrado);
  }, [Pedidos]);

  if (findPedido) {
    return (
      <Main>
        <div className="DivEstadoPedido">
          <h1 className="H1EstadoPedido">
            {" "}
            Estado de entrega do pedido {findPedido.ID}
          </h1>
          <ul className="ListaEstadoPedido">
            <li
              className={`${
                findPedido.EstadoPedido == "Recebido"
                  ? "Ativo"
                  : "PassAwayEstado"
              }`}
            >
              Recebido pelo restaurante
            </li>
            <li
              className={`
                ${
                  findPedido.EstadoPedido == "Preparação"
                    ? "Ativo"
                    : "DisablEstado"
                } ${
                findPedido.EstadoPedido == "Pronto" ||
                findPedido.EstadoPedido == "Saiu" ||
                findPedido.EstadoPedido == "Finalizado"
                  ? "PassAwayEstado"
                  : ""
              }`}
            >
              Pedido em preparação
            </li>
            <li
              className={`
              ${
                findPedido.EstadoPedido == "Saiu" ||
                findPedido.EstadoPedido == "Finalizado"
                  ? "PassAwayEstado"
                  : ""
              } 
                ${
                  findPedido.EstadoPedido == "Pronto" ? "Ativo" : "DisablEstado"
                } `}
            >
              Pedido pronto!
            </li>
            <li
              className={`
                ${
                  findPedido.EstadoPedido == "Finalizado"
                    ? "PassAwayEstado"
                    : ""
                } 
                ${
                  findPedido.EstadoPedido == "Saiu" ? "Ativo" : "DisablEstado"
                }`}
            >
              Pedido saiu para entrega.
            </li>

            <li
              className={`${
                findPedido.EstadoPedido == "Finalizado"
                  ? "Ativo"
                  : "DisablEstado"
              }`}
            >
              Finalizado.
            </li>

            <li className="PassAwayEstado">
              Tempo medio estimado: {findPedido.TempoPedido} minutos
            </li>
          </ul>
        </div>
      </Main>
    );
  } else {
    return (
      <Main>
        <h1>Pedido nao encontrado</h1>
      </Main>
    );
  }
}
