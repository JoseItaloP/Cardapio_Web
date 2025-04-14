import ConjuntoType from "../../../types/ConjuntoType";
import PratoType from "../../../types/PratoType";
import CreatNewConjunto from "../../ConjuntoPrato/CreatNewConjunto";
import CreatNewPrato from "../../ConjuntoPrato/CreatNewPrato";
import ItemConjuntoEdit from "./ItemConjuntoEdit";
import TituloEdit from "./TituloEdit";

export default function ShowConjuntoItem({
  conjuntos,
  ItemsCardapio,
}: {
  conjuntos: ConjuntoType[];
  ItemsCardapio: PratoType[];
}) {
  const itensSemConjunto = ItemsCardapio.filter(
    (item) => !item.Conjunto || item.Conjunto === ""
  );

  return (
    <div className="ConjuntoEdit">
      <div className="boxConjuTop">
        <CreatNewConjunto />
        <CreatNewPrato />
      </div>

      {conjuntos.map((conjunto) => {
        const itensDoConjunto: PratoType[] = conjunto.ItensArmazenados.map(
          (itemID) =>
            ItemsCardapio.find(
              (item) => item.ID === itemID && item.Conjunto === conjunto.Nome
            )
        ).filter((item): item is PratoType => item !== undefined);

        return (
          <div key={conjunto.Nome} className="boxConjuto">
            <h1>
              <TituloEdit Conjunto={conjunto} />
            </h1>
            <ul className="UlItems">
              {itensDoConjunto.map((item) => (
                <ItemConjuntoEdit key={item.ID} Item={item} />
              ))}
            </ul>
          </div>
        );
      })}

      {itensSemConjunto.length > 0 && (
        <div className="boxConjuto">
          <h1>Pratos sem conjuntos</h1>
          <ul className="UlItems">
            {itensSemConjunto.map((item) => (
              <ItemConjuntoEdit key={item.ID} Item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
