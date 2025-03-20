import { createContext, useEffect, useState } from 'react'
import ItemPedido from '../types/ItemPedidoType'
import PedidoType from '../types/PedidoType';
import PratoType from '../types/PratoType';

type ContextType = {
    carrinho: ItemPedido[];
    Pedidos: PedidoType;
    ItemsCardapio: PratoType[]; 
    Conjuntos: string[]
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
          DescComp: "Descrição completa de teste 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minus labore aliquid distinctio aperiam itaque est rem dignissimos doloremque repellendus non accusamus fugiat tempore eveniet aspernatur earum accusantium nobis laudantium."
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
      
      const ItemsCardapio: PratoType[] = [
        {
          Nome: "Prato1",
          Descrição: "Descriçõa Prato: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit amet, ex accusamus deleniti, blanditiis illo distinctio porro tenetur itaque voluptatum optio! Architecto sint similique perferendis, repudiandae corporis unde minima." ,
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição completa de teste 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minus labore aliquid distinctio aperiam itaque est rem dignissimos doloremque repellendus non accusamus fugiat tempore eveniet aspernatur earum accusantium nobis laudantium.",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 0,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato2",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 1,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato3",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 2,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato4",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 3,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato5",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 4,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato6",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 5,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato7",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 6,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato8",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 7,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato9",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescriçãoDetalhada: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 8,
          Conjunto: "Teste",
        },
      ];
      const Conjuntos: string[] = ["Teste"];

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
    <CartContext.Provider value={{carrinho, Pedidos, ItemsCardapio, Conjuntos}}>
      {children}
    </CartContext.Provider>
  )
}


