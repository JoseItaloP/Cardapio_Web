import { useContext, useEffect, useState } from "react";
import ShowPedido from "./ShowPedido";
import { CartContext } from "../../context/CartContext";
import PedidoType from "../../types/PedidoType";

type EPedidoType = {
  IDpEdido: number;
  EstadoP: string;
};

export default function PedidosFeitos() {
  const { Pedidos, UpdateStatePedido } = useContext(CartContext);
  const [showPedidos, setShowPedidos] = useState<PedidoType[]>([]);

  const ShowEstadoPedido = [
    "Recebido",
    "Preparação",
    "Pronto",
    "Saiu",
    "Finalizado",
  ];

  const [ShowEPedido, setShowEPedido] = useState<EPedidoType[]>([]);

  function UpdateStado(index: number, PedidoID: number) {
    const newStado = ShowEstadoPedido[index];

    setShowEPedido((prevStado) =>
      prevStado.map((eTpedido) =>
        eTpedido.IDpEdido === PedidoID
          ? { ...eTpedido, EstadoP: newStado }
          : eTpedido
      )
    );
    UpdateStatePedido(newStado, PedidoID);
  }

  useEffect(() => {
    if (Pedidos && Pedidos.length > 0) {
      setShowPedidos(Pedidos);

      const novosEstados = Pedidos.map((pedido) => ({
        IDpEdido: pedido.ID,
        EstadoP: pedido.EstadoPedido,
      }));

      setShowEPedido(novosEstados);
    }
  }, [Pedidos]);

  if (showPedidos)
    return (
      <div className="PedidosFeitosDIV">
        <h1>Pagina que lista os pedidos feitos até então</h1>

        <ul className="ULPedidos">
          {showPedidos.map((Pedido) => (
            <li className="CaixaPedido" key={Pedido.ID}>
              <ShowPedido Pedido={Pedido} />

              <div className="EstadoPedidoDiv">
                <h2>Estado do pedido: </h2>
                <ul className="UlEstadoPedido">
                  {ShowEstadoPedido.map((Stage, index) => {
                    const estadoAtual = ShowEPedido.find(
                      (e) => e.IDpEdido === Pedido.ID
                    )?.EstadoP;

                    return (
                      <li
                        onClick={() => UpdateStado(index, Pedido.ID)}
                        key={Stage + Pedido.ID}
                        className={`EstadoIten ${
                          estadoAtual === Stage ? "SelectedEstado" : ""
                        }`}
                      >
                        {Stage}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  else {
    return <div>Nenhum pedido feito ainda</div>;
  }
}
