import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import PratoType from "../../../types/PratoType";
import { FaEdit } from "react-icons/fa";


export default function TituloEdit({ Conjunto }: { Conjunto: string }) {
  const { ItemsCardapio } = useContext(CartContext);
  const [ConjuntoItens, setConjuntoItens] = useState<PratoType[]>([]);
  const [DetalhesOn, setDetalhesOn] = useState(false);
  const [newConjunto, setNewConjunto] = useState(Conjunto);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const filterConjuntoPrato = ItemsCardapio.filter(
      (item) => item.Conjunto === Conjunto
    );
    setConjuntoItens(filterConjuntoPrato);
  }, [Conjunto, ItemsCardapio]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
    <section 
         className="titulo-container" 
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}
    >
      <h1 
      onClick={() => setDetalhesOn(true)}>
        {Conjunto}
      </h1>
      
      {(isHovered || isMobile) && <FaEdit className="edit-icon" />}
    </section>

      {DetalhesOn ? (
        <section className={`${DetalhesOn ? "DetalhesPrato" : "disableBox"}`}>
            <div className="BoxEditConjunto">
                <h1>
                <input
                    type="text"
                    name="EditConjunto"
                    id="EditConjunto"
                    value={newConjunto}
                    onChange={(e) => setNewConjunto(e.target.value)}
                />
                </h1>
            <ul>
                {ConjuntoItens.map((item) => (
                <li>{item.Nome}</li>
                ))}
            </ul>

            </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
