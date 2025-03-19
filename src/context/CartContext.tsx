import { createContext, useEffect, useState } from 'react'
import ItemPedido from '../types/ItemPedidoType'
import PedidoType from '../types/PedidoType';

type ContextType = {
    carrinho: ItemPedido[];
    Pedidos: PedidoType;
}

export const CartContext = createContext({} as ContextType)

export default function CartProvider({children}: {children: React.ReactNode})  {

  const [TempoPedido, setTempoPedido] = useState(0)
    const carrinho = [
        {
          ID: 0,
          Nome: "TESTE 1",
          Quantidade: 1,
          Valor: 13.5,
          DescResulm: "Resumo de teste 1",
          DescComp: "Descrição completa de teste 1",
        },
        {
          ID: 1,
          Nome: "TESTE 2",
          Quantidade: 3,
          Valor: 10.0,
          DescResulm: "Resumo de teste 2, Resumo de teste 2",
          DescComp: "Descrição completa de teste 2",
        },
        {
          ID: 2,
          Nome: "TESTE 3",
          Quantidade: 2,
          Valor: 15.0,
          DescResulm: "Resumo de teste 3",
          DescComp: "Descrição completa de teste 3",
        },
      ]

      const EstadoPedido = [
        "Recebido",
        "Pedido",
        "Pronto",
        "Saiu"
      ]
      
      const ValorTotal = carrinho.reduce((acc, item)=> acc + item.Valor,0)

      const Pedidos: PedidoType = {
        ID: '0001',
        EstadoPedido,
        PosiçãoEstadoPedido: 3,
        ValorTotal,
        ListaItens: carrinho,
        TempoPedido
      }

      useEffect(()=>{
        setTempoPedido(carrinho.length * 10)
      },[carrinho])

  return (
    <CartContext.Provider value={{carrinho, Pedidos}}>
      {children}
    </CartContext.Provider>
  )
}


