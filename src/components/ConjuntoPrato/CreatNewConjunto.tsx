import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../../context/CartContext";

export default function CreatNewConjunto() {
  const [disableBox, setDisableBox] = useState(false);
  const [NewConjuntName, setNewConjuntName] = useState("");
  const { CreatConjunto } = useContext(CartContext);

  return (
    <>
      <button onClick={() => setDisableBox(true)} className="BttEditOpen">
        Criar novo Conjunto
      </button>

      {disableBox ? (
        <div className={`${disableBox ? "ShowBox" : "disableBox"}`}>
          <section className="BoxEditConjunto">
            <IoMdClose
              className="CloseConjuntEdit"
              onClick={() => setDisableBox(false)}
            />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDisableBox(false);
              }}
              className="FormEditBox"
            >
              <label className="LabelInput">
                <h1>Titulo do novo conjunto:</h1>
                <input
                  type="text"
                  name="NewConjunto"
                  id="NewConjunto"
                  value={NewConjuntName}
                  onChange={(e) => setNewConjuntName(e.target.value)}
                  className="InputEditBox"
                />
              </label>
              <button
                className="InputBTN"
                onClick={() => CreatConjunto(NewConjuntName)}
              >
                {" "}
                Cria novo Conjunto
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
