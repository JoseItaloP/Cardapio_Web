import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import PratoType from "../../../types/PratoType";
import { CartContext } from "../../../context/CartContext";

export default function ItemConjuntoEdit({ Item }: { Item: PratoType }) {
  const [DetalhesOn, setDetalhesOn] = useState(false);
  const [EditedNew, setEditedNew] = useState<PratoType>(Item);

  const { EditItemCardapio, Conjuntos, DeleteItemPrato } =
    useContext(CartContext);

  function HamdlerEditer() {
    EditItemCardapio(EditedNew, Item);
  }

  return (
    <li className="ItemPratoEdit">
      <>
        <section
          className="CaixaPratoGridElement"
          onClick={() => setDetalhesOn(true)}
          key={Item.ID}
        >
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
          </div>
        </section>

        <section className={`${DetalhesOn ? "DetalhesPrato" : "disableBox"}`}>
          <div className="CaixaDetalhesPrato">
            <div className="TopLevelDetalhes">
              <h1>
                Edição do prato{" "}
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={EditedNew.Nome}
                  onChange={(e) =>
                    setEditedNew({ ...Item, Nome: e.target.value })
                  }
                />
              </h1>
              <IoCloseSharp
                onClick={() => setDetalhesOn(false)}
                className="CloseDetalhesCaixa"
              />
            </div>
            <div className="MainCaixaDetalhes">
              <div className="ImgDetalhesPrato">IMG</div>
              <p className="ValorDetalhesCaixa">
                R$:{" "}
                <input
                  type="text"
                  name="Valor"
                  id="Valor"
                  value={EditedNew.Valor.toFixed(2)}
                  onChange={(e) =>
                    setEditedNew({ ...Item, Valor: parseFloat(e.target.value) })
                  }
                />
              </p>

              <div className="DescricaoIngCaixa">
                <p className="DescricaoResulmoCaixa">
                  <textarea
                    name="ResulDesc"
                    className="TextAreaDesc"
                    id="ResulDesc"
                    value={EditedNew.Descrição}
                    onChange={(e) =>
                      setEditedNew({ ...Item, Descrição: e.target.value })
                    }
                  />
                </p>

                <p className="DescricaoDetalhesCaixa">
                  <textarea
                    name="DescComp"
                    id="DescComp"
                    value={EditedNew.DescComp}
                    className="TextAreaDesc"
                    onChange={(e) =>
                      setEditedNew({ ...Item, DescComp: e.target.value })
                    }
                  />
                </p>

                <h1>Ingredientes: </h1>
                <ul className="IngedientesList">
                  {EditedNew.Ingredientes.map((Ing, index) => (
                    <li
                      className="ItemIngredientList"
                      key={`${index}:${Item.ID}`}
                    >
                      <input
                        type="text"
                        name="Ingrediente"
                        id="Ingrediente"
                        value={Ing}
                        onChange={(e) => {
                          const newIngredient = [...EditedNew.Ingredientes];
                          newIngredient[index] = e.target.value;
                          setEditedNew({
                            ...Item,
                            Ingredientes: newIngredient,
                          });
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {Item.Conjunto.length == 0 ? (
                <div className="AltConjuntItem">
                  <h1>Alterar Conjunto do Item</h1>
                  <select
                    onChange={(e) => {
                      const selectedConjuntoID = Number(e.target.value);
                      const selectedConjunto = Conjuntos.find(
                        (Conjunt) => Conjunt.ID === selectedConjuntoID
                      );
                      if (selectedConjunto) {
                        setEditedNew({
                          ...EditedNew,
                          Conjunto: selectedConjunto?.Nome,
                        });
                      }
                    }}
                  >
                    <option value="">Selecione um Conjunto</option>
                    {Conjuntos.map((Conjunt) => (
                      <option key={Conjunt.ID} value={Conjunt.ID}>
                        {Conjunt.Nome}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                ""
              )}
              <button onClick={() => DeleteItemPrato(Item.ID)}>
                Deletar Item
              </button>
              <button
                className="BtnAddToCarDetalhes"
                onClick={() => HamdlerEditer()}
              >
                Terminar edição
              </button>
            </div>
          </div>
        </section>
      </>
    </li>
  );
}
