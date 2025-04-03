import ConjuntoType from "../../../types/ConjuntoType";
import PratoType from "../../../types/PratoType";
import ItemConjuntoEdit from "./ItemConjuntoEdit";
import TituloEdit from "./TituloEdit";

export default function ShowConjuntoItem({
  conjuntos,
  ItemsCardapio,
  PratoSemConjunto,
}: {
  conjuntos: ConjuntoType[];
  ItemsCardapio: PratoType[];
  PratoSemConjunto: PratoType[];
}) {
  return (
    <div className="ConjuntoEdit">
      {conjuntos.map((conjunto) => (
        <div className="boxConjuto">
          <h1>
            <TituloEdit Conjunto={conjunto} />
          </h1>
          <ul className="UlItems">
            {ItemsCardapio.map((item) =>
              conjunto.ItensArmazenados.map((ItemID) =>
                ItemID == item.ID && conjunto.Nome == item.Conjunto ? (
                  <ItemConjuntoEdit Item={item} />
                ) : (
                  ""
                )
              )
            )}
          </ul>
        </div>
      ))}
      <div className="boxConjuto">
        <h1>Pratos sem conjuntos</h1>
        <ul>
          {PratoSemConjunto.map((Prato) => (
            <ItemConjuntoEdit Item={Prato} />
          ))}
        </ul>
      </div>
    </div>
  );
}
