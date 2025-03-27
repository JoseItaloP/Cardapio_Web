
import ItemPedido from '../../types/ItemPedidoType'

export default function ItemPedidoFunc({Item}: {Item: ItemPedido}) {
  return (
    <li className='ItemPedido'>
        <h3>{Item.Nome}</h3>
        <p className='QuantiIten'>{Item.Quantidade}x</p>
        <p>R$: {(Item.Valor * Item.Quantidade).toFixed(2)}</p>
    </li>
  )
}
