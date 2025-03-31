import PratoType from "../../../types/PratoType";
import ItemConjuntoEdit from "./ItemConjuntoEdit";
import TituloEdit from "./TituloEdit";


export default function ShowConjuntoItem({
  conjuntos,
  ItemsCardapio,
}: {
  conjuntos: string[];
  ItemsCardapio: PratoType[];
}) {
  return (
    <div className="ConjuntoEdit">
      {conjuntos.map((conjunto) => (
            <div className="boxConjuto">
                <h1><TituloEdit Conjunto={conjunto}/></h1>
                <ul className="UlItems">
                {ItemsCardapio.map((item) =>
                    item.Conjunto == conjunto ? (
                        <ItemConjuntoEdit Item={item} />
                      ) : (
                        ""
                      )
                    )}
                </ul>
            </div>
      ))}
    </div>
  );
}
