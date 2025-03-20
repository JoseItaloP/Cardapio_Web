import { useState } from "react";
import PratoType from "../../types/PratoType";
import { IoCloseSharp } from "react-icons/io5";

interface PratoProps {
  Item: PratoType;
}

export default function Prato({ Item }: PratoProps) {
  const [DetalhesOn, setDetalhesOn] = useState(false);
  return (
    <>
      <li className="CaixaPratoGridElement" onClick={() => setDetalhesOn(true)}>
        <h2>{Item.Nome}</h2>
        <div className="CaixaPrato">
          <div className="PhotoPrato">IMAGEM</div>
          <div>
            <p className="DescItem">
              {Item.Descrição}: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae vel velit modi iste temporibus ducimus,
              illo ad fugit soluta debitis autem eum? Eligendi nesciunt,
              reprehenderit non minima consequuntur iure itaque?
            </p>
            <button className="ValorItem">
              <strong>R$:</strong>
              {Item.Valor}
            </button>
            <button className="BtnAddToCar">Adicionar ao carinho</button>
          </div>
        </div>
      </li>
      <section className={`${DetalhesOn ? "DetalhesPrato" : "disableBox"}`}>
        <div className="CaixaDetalhesPrato">
          <div className="TopLevelDetalhes">
            <h1>Detalhes do prato {Item.Nome}</h1>
            <IoCloseSharp onClick={() => setDetalhesOn(false)} />
          </div>
          <div className="MainCaixaDetalhes">
            <div className="ImgDetalhesPrato">IMG</div>
            <p className="DescricaoDetalhesCaixa">{Item.DescriçãoDetalhada}</p>
            <button className="BtnAddToCarDetalhes">
              Adcionar ao carrinho
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
