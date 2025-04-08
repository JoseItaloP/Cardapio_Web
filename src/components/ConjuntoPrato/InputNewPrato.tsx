import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function InputNewPrato({
  labelString,
  valueOF,
  OnChange,
  type,
  BTT,
  Ingredientes,
  OnChangeSelect,
}: {
  labelString: string;
  valueOF?: string | number;
  OnChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  BTT?: React.MouseEventHandler<HTMLButtonElement>;
  Ingredientes?: string[];
  OnChangeSelect?: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  const { Conjuntos } = useContext(CartContext);
  switch (type) {
    case "padrao":
      return (
        <label htmlFor="" className="LabelInput">
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
        <label className="LabelInput">
          <h1>{labelString}</h1>
          <div className="IngDiv">
            <input
              type="text"
              name=""
              id=""
              onChange={OnChange}
              className="IngInput"
            />
            <button onClick={BTT} className="IngBtn">
              Adicionar Ingrediente
            </button>
          </div>
          {Ingredientes?.map((ingrediente) => (
            <p>{ingrediente}</p>
          ))}
        </label>
      );

    case "conjunto":
      return (
        <label htmlFor="">
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
