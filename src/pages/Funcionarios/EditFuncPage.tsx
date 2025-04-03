import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ShowConjuntoItem from "../../components/Funcionario/EditPage/ShowConjuntoItem";
import './AppFuncionarios.css'
import MainFunc from "../../components/Funcionario/MainFunc/MainFunc";

export default function EditFuncPage() {
  const { Conjuntos, ItemsCardapio, PratoSemConjunto } = useContext(CartContext);
  return (
    <MainFunc>
      <h1>Items no Cardapio</h1>
      <section className="ShowConjuntoItem">
        <ShowConjuntoItem conjuntos={Conjuntos} ItemsCardapio={ItemsCardapio} PratoSemConjunto={PratoSemConjunto} />
      </section>
    </MainFunc>
  );
}
