import { useContext, useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";
import LiPrato from "./LiPrato";
import { IoMdClose } from "react-icons/io";
import ConjuntoType from "../../../types/ConjuntoType";
import { CartContext } from "../../../context/CartContext";

export default function TituloEdit({ Conjunto }: { Conjunto: ConjuntoType }) {
  const [DetalhesOn, setDetalhesOn] = useState(false);
  const [newConjunto, setNewConjunto] = useState<ConjuntoType>(Conjunto);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { EditConjuntoNome, DeleteConjunto } = useContext(CartContext);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function EditNomeConjunto(newName: string, ID: number) {
    setNewConjunto((prevConjunto) => ({
      ...prevConjunto,
      Nome: newName,
    }));
    EditConjuntoNome(ID, newName);
  }

  return (
    <>
      <section
        className="titulo-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 onClick={() => setDetalhesOn(true)}>{Conjunto.Nome}</h1>

        {(isHovered || isMobile) && <FaEdit className="edit-icon" />}
      </section>

      {DetalhesOn ? (
        <section className={`${DetalhesOn ? "DetalhesPrato" : "disableBox"}`}>
          <div className="BoxEditConjunto">
            <IoMdClose
              className="CloseConjunt"
              onClick={() => setDetalhesOn(false)}
            />

            <h1 className="ConjuntoTittleEdit">
              <input
                type="text"
                name="EditConjunto"
                id="EditConjunto"
                value={newConjunto.Nome}
                onChange={(e) => EditNomeConjunto(e.target.value, Conjunto.ID)}
              />
            </h1>
            <ul className="UlPrato">
              {Conjunto.ItensArmazenados.map((item) => (
                <LiPrato itemID={item} ConjuntID={Conjunto.ID} />
              ))}
            </ul>

            <button
              className="BtnAddToCarDetalhes"
              onClick={() => DeleteConjunto(Conjunto.ID)}
            >
              Deletar conjunto
            </button>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
