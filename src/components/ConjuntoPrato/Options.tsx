import Prato from "./Prato";
import PratoType from "../../types/PratoType";
import ConjuntoType from "../../types/ConjuntoType";

interface OptionsProps {
  ItemsCardapio: PratoType[];
  Conjunto: ConjuntoType;
}

export default function Options({ ItemsCardapio, Conjunto }: OptionsProps) {
  return (
    <section className="ConjuntoTipoPratos" key={Conjunto.ID}>
      <h1>{Conjunto.Nome}</h1>
      <ul className="GridHandlerPratos">
        {ItemsCardapio.map((item: PratoType) => {
          if (Conjunto.Nome === item.Conjunto) {
            return <Prato Item={item} key={item.ID} />;
          }
        })}
      </ul>
    </section>
  );
}
