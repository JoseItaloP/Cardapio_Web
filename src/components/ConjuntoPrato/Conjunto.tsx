import  { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import NoItems from './NoItems';
import Options from './Options';


export default function Conjunto() {
    const {ItemsCardapio, Conjuntos} = useContext(CartContext)
  return (
    <div className="DivPagePedido">
            {Conjuntos.map((Conjunto) => {
              if (Conjuntos === null) {
                return <NoItems />;
              } else {
                return (
                  <Options Conjunto={Conjunto} ItemsCardapio={ItemsCardapio} />
                );
              }
    })}
    </div>
  )
}
