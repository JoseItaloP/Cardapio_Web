import PratoType from "../../../types/PratoType";
import { IoMdClose } from "react-icons/io";

 function LiPrato({item}:{item:PratoType}) {
  return (
    <li className="LiPrato">
      <h2 className="RemoverConjH2">
        <IoMdClose className="RemoverConj"/>
      </h2>
        <h1>{item.Nome}</h1>
        <h2 className="AdiconarConj">Adicionar a outro Conjunto</h2>
    </li>
  )
}

export default  LiPrato
 