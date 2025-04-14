import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoMdClose } from "react-icons/io";

export default function InputNewPrato({
  labelString,
  valueOF,
  OnChange,
  type,
  BTT,
  BtnRemove,
  Ingredientes,
  OnChangeSelect,
}: {
  labelString: string;
  valueOF?: string | number;
  OnChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  BTT?: React.MouseEventHandler<HTMLButtonElement>;
  BtnRemove?: (ingrediente: string) => void;
  Ingredientes?: string[];
  OnChangeSelect?: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  const { Conjuntos } = useContext(CartContext);
  switch (type) {
    case "padrao":
      return (
        <label className="LabelInput" key={labelString}>
          <h1>{labelString}</h1>

          <input
            type="text"
            name="NewConjunto"
            id="NewConjunto"
            value={valueOF}
            onChange={OnChange}
            className="InputEditBox"
          />
        </label>
      );

    case "ingrediente":
      return (
        <label className="LabelInput" key={labelString}>
          <h1>{labelString}</h1>
          <section className="IngDiv">
            <input type="text" onChange={OnChange} className="IngInput" />
            <button onClick={BTT} className="IngBtn">
              Adicionar Ingrediente
            </button>
          </section>
          <section className="IngBoxList">
            {Ingredientes?.map((ingrediente) => (
              <div className="IngItemOnList" key={ingrediente}>
                <p>{ingrediente}</p>
                <IoMdClose
                  onClick={() => BtnRemove?.(ingrediente)}
                  className="RemoveItemList"
                />
              </div>
            ))}
          </section>
        </label>
      );

    case "conjunto":
      return (
        <label key={labelString}>
          <h1>{labelString}</h1>
          <select onChange={OnChangeSelect}>
            <option value="">Sem Conjunto</option>
            {Conjuntos.map((Conjunto) => (
              <option value={Conjunto.Nome} key={Conjunto.ID}>
                {Conjunto.Nome}
              </option>
            ))}
          </select>
        </label>
      );

    default:
      console.error("erro");
  }
}
