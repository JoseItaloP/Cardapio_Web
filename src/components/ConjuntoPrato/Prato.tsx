import { useContext, useState } from "react";
import PratoType from "../../types/PratoType";
import { IoCloseSharp } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";

interface PratoProps {
  Item: PratoType;
}

export default function Prato({ Item }: PratoProps) {
  const [DetalhesOn, setDetalhesOn] = useState(false);
  const { AddingToCartItem } = useContext(CartContext);

  function AddToCart() {
    AddingToCartItem(Item.ID);
    setDetalhesOn(false);
  }

  return (
    <>
      <li className="CaixaPratoGridElement">
        <h2>{Item.Nome}</h2>
        <div className="CaixaPrato">
          <div className="PhotoPrato" onClick={() => setDetalhesOn(true)}>
            IMAGEM
          </div>
          <div onClick={() => setDetalhesOn(true)}>
            <p className="DescItem">{Item.Descrição}</p>
            <button className="ValorItem">
              <strong>R$:</strong>
              {Item.Valor.toFixed(2)}
            </button>
          </div>
          <button className="BtnAddToCar" onClick={() => AddToCart()}>
            Adicionar ao carinho
          </button>
        </div>
      </li>
      <section className={`${DetalhesOn ? "DetalhesPrato" : "disableBox"}`}>
        <div className="CaixaDetalhesPrato">
          <div className="TopLevelDetalhes">
            <h1>Detalhes do prato {Item.Nome}</h1>
            <IoCloseSharp
              onClick={() => setDetalhesOn(false)}
              className="CloseDetalhesCaixa"
            />
          </div>
          <div className="MainCaixaDetalhes">
            <div className="ImgDetalhesPrato">IMG</div>
            <p className="ValorDetalhesCaixa">R$:{Item.Valor.toFixed(2)}</p>
            <div className="DescricaoIngCaixa">
              <p className="DescricaoDetalhesCaixa">{Item.DescComp}</p>
              <ul className="IngedientesList">
                <h1>Ingredientes: </h1>
                {Item.Ingredientes.map((Ing) => (
                  <li className="ItemIngredientList">{Ing}</li>
                ))}
              </ul>
            </div>
            <button className="BtnAddToCarDetalhes" onClick={AddToCart}>
              Adcionar ao carrinho
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
