import { useState } from "react";
import PedidoType from "../../types/PedidoType";
import ShowPedido from "./ShowPedido";

export default function PedidosFeitos() {
  const EstadoPedido = [
    "Recebido pelo restaurante",
    "Pedido em preparação",
    "Pronto para coleta",
    "Saiu para entrega",
    "Pedido finalizado",
  ];

  const ShowEstadoPedido = [
    "Recebido",
    "Preparação",
    "Pronto",
    "Saiu",
    "Finalizado"
  ]
  const [Pedidos, setPedidos] = useState<PedidoType[]>([
    {
      ID: "0001",
      EstadoPedido: EstadoPedido[0],
      ValorTotal: 72,
      ListaItens: [
        {
          Nome: "Prato1",
          Descrição:
            "Descriçõa Prato: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit amet, ex accusamus deleniti, blanditiis illo distinctio porro tenetur itaque voluptatum optio! Architecto sint similique perferendis, repudiandae corporis unde minima.",
          Valor: 12.0,
          DescComp:
            "Descrição completa de teste 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minus labore aliquid distinctio aperiam itaque est rem dignissimos doloremque repellendus non accusamus fugiat tempore eveniet aspernatur earum accusantium nobis laudantium.",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 0,
          Conjunto: "Teste",
          Quantidade: 1,
        },
        {
          Nome: "Prato2",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 1,
          Conjunto: "Teste",
          Quantidade: 3,
        },
        {
          Nome: "Prato3",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 2,
          Conjunto: "Teste",
          Quantidade: 2,
        },
      ],
      TempoPedido: 60,
    },
    {
      ID: "0002",
      EstadoPedido: EstadoPedido[0],
      ValorTotal: 72,
      ListaItens: [
        {
          Nome: "Prato2",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 1,
          Conjunto: "Teste",
          Quantidade: 3,
        },
        {
          Nome: "Prato3",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 2,
          Conjunto: "Teste",
          Quantidade: 2,
        },
      ],
      TempoPedido: 60,
    },
  ]);
  const [ShowEPedido, setShowEPedido] = useState<string>("Recebido")

  function UpdateStado(index: number, PedidoID: string) {
    setShowEPedido(ShowEstadoPedido[index])
    setPedidos((prevEstado) =>
      prevEstado.map((pedido) =>
        pedido.ID == PedidoID
          ? { ...pedido, EstadoPedido: EstadoPedido[index] }
          : pedido
      )
    );
  }

  return (
    <div className="PedidosFeitosDIV">
      <h1>Pagina que lista os pedidos feitos até então</h1>
      <ul className="ULPedidos">
        {Pedidos.map((Pedido) => (
          <li className="CaixaPedido" key={Pedido.ID}>
            <ShowPedido Pedido={Pedido}  />
            <div className="EstadoPedidoDiv">
              <h2>Estado do pedido: </h2>
              <ul className="UlEstadoPedido">
                {ShowEstadoPedido.map((Stage, index) => (
                  <li onClick={() => UpdateStado(index, Pedido.ID)} key={Stage} className={`EstadoIten ${ShowEPedido == Stage ? 'SelectedEstado' : ''}`}>
                    {Stage}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
