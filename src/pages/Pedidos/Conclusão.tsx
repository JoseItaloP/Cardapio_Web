import { useEffect, useState } from "react";
import Main from "../../components/Main";
import "./AppPedidos.css";
import ListaItens from "../../components/Pedido/ListaItens";
import carrinho from "../../components/Pedido/Carrinho";

export default function Conclusão() {
  const [Entrega, setEntrega] = useState<string>("");
  const [Metodo, setMetodo] = useState<boolean>(false);
  const [valor, setValor] = useState<number>(0)
  const [Pagamento, setPagamento] = useState<string>('')

  useEffect(() => {
    const total = carrinho.reduce((acc, item) => acc + item.Quantidade * item.Valor, 0);
    setValor(total);
  }, [carrinho]);

  return (
    <Main>
      <form action="">
        <h1>Como gostaria de receber o produto?</h1>
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
          </fieldset>

          {/* CASA */}
          <div
            className={`${Entrega == "casa" ? "DivCasaForms" : "disableBox"}`}
          >
            <label htmlFor="CEP">
              <input type="text" name="CEP" id="CEP" /> CEP{" "}
            </label>
            <label htmlFor="bairo">
              <input type="text" name="bairo" id="bairo" /> Nome do bairo{" "}
            </label>
            <label htmlFor="rua">
              <input type="text" name="rua" id="rua" /> Nome da rua{" "}
            </label>
            <label htmlFor="NumCasa">
              <input type="text" name="NumCasa" id="NumCasa" /> Numero da casa{" "}
            </label>
            <label htmlFor="complemento">
              <input type="text" name="complemento" id="complemento" />{" "}
              Complemento{" "}
            </label>
          </div>
          {/* APARTAMENTO */}
          <div
            className={`${
              Entrega == "apartamento" ? "DivAptForms" : "disableBox"
            }`}
          >
            <label htmlFor="CEP">
              <input type="text" name="CEP" id="CEP" /> CEP{" "}
            </label>

            <label htmlFor="rua">
              <input type="text" name="rua" id="rua" /> Nome da rua{" "}
            </label>

            <label htmlFor="NomPre">
              <input type="text" name="NomPre" id="NomPre" /> Nome do Predio
            </label>

            <label htmlFor="NumApt">
              <input type="text" name="NumApt" id="NumApt" /> Numero do
              apartamento
            </label>
          </div>
        </fieldset>
        <fieldset>
          <h2>Qual o metodo de pagamento?</h2>
          <select name="pagamento" id="pagamento" onChange={(e)=>{setPagamento(e.target.value)}}>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao">Cartão</option>
            <option value="pix">Pix</option>
          </select>
          <fieldset className={`${Metodo && Pagamento === 'dinheiro' ? '  EntregaDinheiroDiv' : 'disableBox'}`}>
            <h2>Informe o valor da nota de pagamento para o troco.</h2>
            <input type="text" name="PayTroco" id="PayTroco" required/>
          </fieldset>
        </fieldset>
        <ul>
          {
            carrinho.map((item)=> {
           
            return <ListaItens key={item.ID} Item={item}/>
          })
          }
        </ul>
        <h2>Valor total de: ${(valor).toFixed(2)}</h2>
        <button>Confirmar pedido!</button>
      </form>
    </Main>
  );
}
