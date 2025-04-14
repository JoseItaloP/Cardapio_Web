import { Link } from "react-router-dom";

export default function SemPedidos() {
  return (
    <div className="SemPedDiv">
      <h1>Não a pedidos adicionados no carrinho!</h1>
      <Link to={"/"}>Voltar para pagina do cardapio</Link>
    </div>
  );
}
