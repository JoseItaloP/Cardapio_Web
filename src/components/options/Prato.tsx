import PratoType from "../../types/PratoType";

interface PratoProps {
  Item: PratoType;
}

export default function Prato({ Item }: PratoProps) {
  return (
    <li className="CaixaPratoGridElement">
      <h2>{Item.Nome}</h2>
      <div className="CaixaPrato">
        <div className="PhotoPrato">IMAGEM</div>
        <div>
        <p className="DescItem">{Item.Descrição}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel velit modi iste temporibus ducimus, illo ad fugit soluta debitis autem eum? Eligendi nesciunt, reprehenderit non minima consequuntur iure itaque?</p>
        <button className="ValorItem"><strong>R$:</strong>{Item.Valor}</button>
        </div>
      </div>
    </li>
  );
}
