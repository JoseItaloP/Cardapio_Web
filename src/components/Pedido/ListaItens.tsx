
import ItemPedido from '../../types/ItemPedidoType'

export default function ListaItens({Item}: {Item: ItemPedido}) {
  return (
    <li key={Item.ID} className='ItemOnListaCofirm'>
        <strong className='QuantitConfirm'>x{Item.Quantidade}</strong>
        <p className='NomeConfirm'>{Item.Nome}</p>
        <p className='DescResulConfirm'>{Item.DescResulm}</p>
        <p className='ValorConfirm'>R$: {(Item.Valor * Item.Quantidade).toFixed(2)}</p>
    </li>
  )
}
