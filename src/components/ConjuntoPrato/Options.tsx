import Prato from "./Prato";
import PratoType from "../../types/PratoType";

interface OptionsProps {
  ItemsCardapio: PratoType[];
  Conjunto: string;
}

export default function Options({ ItemsCardapio, Conjunto }: OptionsProps) {
  return (
    <section className="ConjuntoTipoPratos">
      <h1>{Conjunto}</h1>
      <ul className="GridHandlerPratos">
        {ItemsCardapio.map((item: PratoType) => {
          if (Conjunto === item.Conjunto) {
            return <Prato Item={item} />;
          }
        })}
      </ul>
    </section>
  );
}
