import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../../../context/CartContext";
import PratoType from "../../../types/PratoType";

 function LiPrato({itemID, ConjuntID}:{itemID:number, ConjuntID: number}) {
  const { ItemsCardapio, Conjuntos, DeleteItemConjunto, MoveItemToOtherConjunto } = useContext(CartContext);
  const [ItemOnConjunto, setItemOnConjunto] = useState<PratoType | null>()
  const [OptionChangeConjunt, setOptionChangeConjunt] = useState<number>(ConjuntID)
  const [disableBox, setDisableBox] = useState(false)

  useEffect(()=>{
    setItemOnConjunto(ItemsCardapio.find((item)=>
      item.ID == itemID
    ))
  }, [ItemsCardapio, itemID])

 

if(!ItemOnConjunto) return null
  return (
  <>
    <li className="LiPrato">
      <h2 className="RemoverConjH2">
        <IoMdClose className="RemoverConj" onClick={(()=>DeleteItemConjunto(ItemOnConjunto.ID, ConjuntID))}/>
      </h2>
        <h1>{ItemOnConjunto.Nome}</h1>
        <h2 className="AdiconarConj" onClick={()=>setDisableBox(true)}>Adicionar a outro Conjunto</h2>
    </li>
   {
    disableBox ? (
    <div className={`${disableBox ? 'ShowBox' : 'disableBox'}`}>
      <section className="SectionChoseNewOptConjunt">
        <h1>Selecione o conjuto para o prato</h1>
      <select name="" id="">
        {Conjuntos.map((Conjunt) => Conjunt.ID != ConjuntID ?  (
          <option value={Conjunt.Nome} onChange={()=>setOptionChangeConjunt(Conjunt.ID)}>{Conjunt.Nome}</option>
        ) : '')}
      </select>
      <button onClick={()=>MoveItemToOtherConjunto(ConjuntID, OptionChangeConjunt, itemID)}>ConfirmarMudança</button>
      </section>
    </div>): ''
   }

    </>)
  
}

export default  LiPrato
 