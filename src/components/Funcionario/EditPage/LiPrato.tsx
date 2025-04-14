import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../../../context/CartContext";
import PratoType from "../../../types/PratoType";

function LiPrato({ itemID, ConjuntID }: { itemID: number; ConjuntID: number }) {
  const {
    ItemsCardapio,
    Conjuntos,
    DeleteItemConjunto,
    MoveItemToOtherConjunto,
  } = useContext(CartContext);

  const [ItemOnConjunto] = useState<PratoType | undefined>(
    ItemsCardapio.find((item) => item.ID == itemID)
  );
  const [OptionChangeConjunt, setOptionChangeConjunt] = useState<number>(-1);
  const [disableBox, setDisableBox] = useState(false);

  useEffect(() => {
    const firstDifferent = Conjuntos.find((conj) => conj.ID !== ConjuntID);
    if (firstDifferent) {
      setOptionChangeConjunt(firstDifferent.ID);
    }
  }, [Conjuntos, ConjuntID]);

  if (!ItemOnConjunto) return null;
  return (
    <>
      <li className="LiPrato">
        <h2 className="RemoverConjH2">
          <IoMdClose
            className="RemoverConj"
            onClick={() => DeleteItemConjunto(ConjuntID, ItemOnConjunto.ID)}
          />
        </h2>
        <h1>{ItemOnConjunto.Nome}</h1>
        <h2 className="AdiconarConj" onClick={() => setDisableBox(true)}>
          Adicionar a outro Conjunto
        </h2>
      </li>

      {disableBox ? (
        <div className={`${disableBox ? "ShowBox" : "disableBox"}`}>
          <section className="SectionChoseNewOptConjunt">
            <IoMdClose
              className="CloseConjunt"
              onClick={() => setDisableBox(false)}
            />
            <h1>Selecione o conjuto para o prato</h1>
            <select
              onChange={(e) => setOptionChangeConjunt(Number(e.target.value))}
            >
              {Conjuntos.map((Conjunt) =>
                Conjunt.ID != ConjuntID ? (
                  <option value={Conjunt.ID}>{Conjunt.Nome}</option>
                ) : null
              )}
            </select>
            <button
              className="BtnAddToCarDetalhes"
              onClick={() =>
                MoveItemToOtherConjunto(ConjuntID, OptionChangeConjunt, itemID)
              }
            >
              ConfirmarMudança
            </button>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default LiPrato;
