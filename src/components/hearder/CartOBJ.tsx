import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

export default function CartOBJ() {
    const {carrinho} = useContext(CartContext)
  return (
    <div className="CartOBJ">
      <div className="CartContainer">
        <FaShoppingCart className="cartIcon"/>
        <div className="CardDiv">
        <ul className="CartList">
            {carrinho.map((item)=> <li key={item.ID} className="ItenNameCart">{item.Nome}</li>)}
        </ul>

        </div>
      </div>
      <div className="NumberOfItens">
        {carrinho.length}
      </div>
    </div>
  )
}
