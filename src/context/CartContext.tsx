import { createContext } from 'react'
import ItemPedido from '../types/ItemPedidoType'

type ContextType = {
    carrinho: ItemPedido[];
}

export const CartContext = createContext({} as ContextType)

export default function CartProvider({children}: {children: React.ReactNode})  {
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

  return (
    <CartContext.Provider value={{carrinho}}>
      {children}
    </CartContext.Provider>
  )
}


