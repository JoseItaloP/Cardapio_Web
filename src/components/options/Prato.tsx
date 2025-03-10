
import PratoType from "../../types/PratoType";

interface PratoProps {
  Item: PratoType;
}

export default function Prato({ Item }: PratoProps) {
  return<li className="CaixaPrato">
          <h2>{ Item.Nome }</h2>
          <p>{ Item.Descrição }</p>
          <strong>{ Item.Valor }</strong>
          <button>Adicionar ao carinho</button>
        </li>
  
}
