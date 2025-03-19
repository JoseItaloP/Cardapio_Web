import { useContext, useEffect, useState } from "react";
import Main from "../../components/Main";
import "./AppPedidos.css";
import ListaItens from "../../components/Pedido/ListaItens";
import ItemPedido from "../../types/ItemPedidoType";
import SemPedidos from "../../components/Pedido/SemPedidos";
import { CartContext } from "../../context/CartContext";

export default function Conclusão() {
  const {carrinho} = useContext(CartContext)

  const [Entrega, setEntrega] = useState<string>("");
  const [Metodo, setMetodo] = useState<boolean>(false);
  const [valor, setValor] = useState<number>(0);
  const [Pagamento, setPagamento] = useState<string>("dinheiro");

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

  useEffect(() => {
    const total = carrinho.reduce(
      (acc, item) => acc + item.Quantidade * item.Valor,
      0
    );
    setValor(total);
  }, [carrinho]);

  return (
    <Main>
      <form action="" className="FormConclu">
        <h1>Como gostaria de receber o pedido?</h1>
        <select
          name="recebimento"
          id="recebimento"
          onChange={(e) =>
            e.target.value === "entrega" ? setMetodo(true) : setMetodo(false)
          }
        >
          <option value="retirar">Retirar na loja</option>
          <option value="entrega">Entrega</option>
        </select>
        <fieldset className={`${Metodo ? "EntregaBoxDiv" : "disableBox"}`}>
          <h2>Digite seu endereço</h2>

          <fieldset>
            <h3>É uma casa ou apartamento?</h3>
            <div className="SelectEnd">
              <label htmlFor="casa">
                <input
                  type="radio"
                  name="entrega"
                  id="casa"
                  onChange={() => setEntrega("casa")}
                />
                Casa
              </label>
              <label htmlFor="apartamento">
                <input
                  type="radio"
                  name="entrega"
                  id="apartamento"
                  onChange={() => setEntrega("apartamento")}
                />
                Apartamento
              </label>
            </div>
          </fieldset>

          {/* CASA */}
          <div
            className={`${Entrega == "casa" ? "DivCasaForms" : "disableBox"}`}
          >
            <input
              type="text"
              name="CEP"
              id="CEP"
              placeholder="CEP"
              required
              disabled={Entrega !== "casa"}
            />

            <input
              type="text"
              name="bairo"
              id="bairo"
              placeholder="Nome do bairo"
              required
              disabled={Entrega !== "casa"}
            />

            <input
              type="text"
              name="rua"
              id="rua"
              placeholder="Nome da rua"
              required
              disabled={Entrega !== "casa"}
            />

            <input
              type="text"
              name="NumCasa"
              id="NumCasa"
              placeholder="Numero da casa"
              required
              disabled={Entrega !== "casa"}
            />

            <input
              type="text"
              name="complemento"
              id="complemento"
              placeholder="Complemento*"
            />
          </div>
          {/* APARTAMENTO */}
          <div
            className={`${
              Entrega == "apartamento" ? "DivAptForms" : "disableBox"
            }`}
          >
            <input
              type="text"
              name="CEP"
              id="CEP"
              placeholder="CEP"
              required
              disabled={Entrega !== "apartamento"}
            />

            <input
              type="text"
              name="rua"
              id="rua"
              placeholder="Nome da rua"
              required
              disabled={Entrega !== "apartamento"}
            />

            <input
              type="text"
              name="NomPre"
              id="NomPre"
              placeholder="Nome do Predio"
              required
              disabled={Entrega !== "apartamento"}
            />

            <input
              type="text"
              name="NumApt"
              id="NumApt"
              placeholder="Numero do apartamento"
              required
              disabled={Entrega !== "apartamento"}
            />
          </div>
        </fieldset>
        <fieldset>
          <h2>Qual o metodo de pagamento?</h2>
          <select
            name="pagamento"
            id="pagamento"
            onChange={(e) => {
              setPagamento(e.target.value);
            }}
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao">Cartão</option>
            <option value="pix">Pix</option>
          </select>
          <fieldset
            className={`${
              Metodo && Pagamento === "dinheiro"
                ? "  EntregaDinheiroDiv"
                : "disableBox"
            }`}
          >
            <h2>Informe o valor da nota de pagamento para o troco.</h2>
            <input
              type="text"
              name="PayTroco"
              id="PayTroco"
              required
              disabled={Metodo && Pagamento !== "dinheiro"}
            />
          </fieldset>
        </fieldset>
        <ul className="UlConc">
          {ItensCarrinho.some((item) => item.Quantidade > 0) ? (
            ItensCarrinho.map((item) =>
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
            )
          ) : ( <div className="NoPedidosCoclu">

            <SemPedidos />
          </div>
          )}
        </ul>
        <h2>Valor total de: R${valor.toFixed(2)}</h2>
        <button className="btnConclu">Confirmar pedido!</button>
      </form>
    </Main>
  );
}
