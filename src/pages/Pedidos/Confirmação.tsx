import { useState } from "react";
import ListaItens from "../../components/Pedido/ListaItens";
import Main from "../../components/Main";
import ItemPedido from "../../types/ItemPedidoType";
import "./AppPedidos.css";
import SemPedidos from "../../components/Pedido/SemPedidos";

export default function Confirmacao() {
  const [ItensCarrinho, setItensCarrinho] = useState<ItemPedido[]>([
    {
      ID: 0,
      Nome: "TESTE 1",
      Quantidade: 1,
      Valor: 13.5,
      DescResulm: "Resumo de teste 1",
      DescComp: "Descrição completa de teste 1",
    },
    {
      ID: 1,
      Nome: "TESTE 2",
      Quantidade: 3,
      Valor: 10.0,
      DescResulm: "Resumo de teste 2, Resumo de teste 2",
      DescComp: "Descrição completa de teste 2",
    },
    {
      ID: 2,
      Nome: "TESTE 3",
      Quantidade: 2,
      Valor: 15.0,
      DescResulm: "Resumo de teste 3",
      DescComp: "Descrição completa de teste 3",
    },
  ]);

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
