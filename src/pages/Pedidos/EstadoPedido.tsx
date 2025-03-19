import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Main from "../../components/Main";

{
  /*
  "Recebido",
        "Pedido",
        "Pronto",
        "Saiu"
  */
}

export default function EstadoPedido() {
  const { Pedidos } = useContext(CartContext);
  const [EstadoP, setEstadoP] = useState<string>(Pedidos.EstadoPedido[0]);

  useEffect(() => {
    const ChangeEstadoPedido = () => {
      return setEstadoP(Pedidos.EstadoPedido[Pedidos.PosiçãoEstadoPedido]);
    };
    ChangeEstadoPedido();
  }, [Pedidos]);
  return (
    <Main>
      <div className="DivEstadoPedido">
        <h1 className="H1EstadoPedido"> Estado de entrega do pedido {Pedidos.ID}</h1>
        <ul className="ListaEstadoPedido">
          <li
            className={`${EstadoP == "Recebido" ? "Ativo" : "PassAwayEstado"}`}
          >
            Recebido pelo restaurante
          </li>
          <li
            className={`${EstadoP == "Pedido" ? "Ativo" : "DisablEstado"} ${
              EstadoP == "Pronto" || EstadoP == "Saiu" ? "PassAwayEstado" : ""
            }`}
          >
            Pedido em preparação, tempo estimado: {Pedidos.TempoPedido} minutos
          </li>
          <li
            className={`${
              EstadoP == "Saiu" ? "PassAwayEstado" : ""
            } ${EstadoP == "Pronto" ? "Ativo" : "DisablEstado"} `}
          >
            Pedido pronto!
          </li>
          <li className={`${EstadoP == "Saiu" ? "Ativo" : "DisablEstado"}`}>
            Pedido saiu para entrega.
          </li>
        </ul>
      </div>
    </Main>
  );
}
