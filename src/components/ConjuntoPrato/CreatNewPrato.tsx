import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import PratoType from "../../types/PratoType";
import InputNewPrato from "./InputNewPrato";

export default function CreatNewPrato() {
  const [disableBox, setDisableBox] = useState(false);
  const [NewPratoToCreat, setNewPratoToCreat] = useState<PratoType>({
    Nome: "",
    Valor: 0,
    Conjunto: "",
    DescComp: "",
    Descrição: "",
    Ingredientes: [],
    ID: 0,
  });
  const [IngAtual, setIngAtual] = useState("");
  const { CreateItemPrato } = useContext(CartContext);

  function UpdateStancePratoCreat(
    OBJT: keyof PratoType,
    valueOpd: string | number | string[]
  ) {
    setNewPratoToCreat((prevStat) => ({
      ...prevStat,
      [OBJT]: valueOpd,
    }));
  }

  function AddIng() {
    if (IngAtual.trim() === "") return;
    const newListIng = [...NewPratoToCreat.Ingredientes, IngAtual.trim()];

    UpdateStancePratoCreat("Ingredientes", newListIng);
    setIngAtual("");
  }

  function RemoveItem(ingredinte: string) {
    const newListIng = NewPratoToCreat.Ingredientes.filter(
      (item) => item != ingredinte
    );
    UpdateStancePratoCreat("Ingredientes", newListIng);
  }

  return (
    <>
      <button onClick={() => setDisableBox(true)} className="BttEditOpen">
        Cria novo prato
      </button>

      {disableBox ? (
        <div className={`${disableBox ? "ShowBox" : "disableBox"}`}>
          <section className="BoxEditConjunto">
            <IoMdClose
              className="CloseConjuntEditPrato"
              onClick={() => setDisableBox(false)}
            />
            <form
              className="FormEditBox"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <InputNewPrato
                OnChange={(e) => UpdateStancePratoCreat("Nome", e.target.value)}
                labelString="Nome do prato"
                valueOF={NewPratoToCreat.Nome}
                type="padrao"
              />
              <InputNewPrato
                OnChange={(e) =>
                  UpdateStancePratoCreat("Valor", Number(e.target.value))
                }
                labelString="Valor do prato"
                valueOF={NewPratoToCreat.Valor}
                type="padrao"
              />
              <InputNewPrato
                OnChange={(e) =>
                  UpdateStancePratoCreat("Descrição", e.target.value)
                }
                labelString="Descrição simples do prato"
                valueOF={NewPratoToCreat.Descrição}
                type="padrao"
              />
              <InputNewPrato
                OnChange={(e) =>
                  UpdateStancePratoCreat("DescComp", e.target.value)
                }
                labelString="Descrição completa do prato"
                valueOF={NewPratoToCreat.DescComp}
                type="padrao"
              />
              <InputNewPrato
                labelString="Ingredientes do prato"
                valueOF={IngAtual}
                type="ingrediente"
                OnChange={(e) => {
                  setIngAtual(e.target.value);
                }}
                BTT={AddIng}
                BtnRemove={RemoveItem}
                Ingredientes={NewPratoToCreat.Ingredientes}
              />
              <InputNewPrato
                labelString="Conjunto do Prato"
                OnChangeSelect={(e) => {
                  UpdateStancePratoCreat("Conjunto", e.target.value);
                }}
                type="conjunto"
              />

              <button
                className="InputBTN"
                onClick={() => {
                  CreateItemPrato(NewPratoToCreat);
                  setDisableBox(false);
                }}
              >
                {" "}
                Cria novo Prato{" "}
              </button>
            </form>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
