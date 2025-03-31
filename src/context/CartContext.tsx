import { createContext, useEffect, useState } from 'react'
import ItemPedido from '../types/ItemPedidoType'
import PedidoType from '../types/PedidoType';
import PratoType from '../types/PratoType';

type ContextType = {
    carrinho: ItemPedido[];
    Pedido: PedidoType;
    ItemsCardapio: PratoType[]; 
    Conjuntos: string[];
    AddingToCartItem: (ItemKey: number) => void;
    ChangeQuantity: (metodo: string, IdItem: number) => void;
    EditItemCardapio: (NewItem: PratoType, OldItem: PratoType) => void
}

export const CartContext = createContext({} as ContextType)

export default function CartProvider({children}: {children: React.ReactNode})  {

  const [TempoPedido, setTempoPedido] = useState(0)
    const [carrinho, setCarrinho] = useState<ItemPedido[]>([
      {
        Nome: "Prato1",
        Descrição: "Descriçõa Prato: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit amet, ex accusamus deleniti, blanditiis illo distinctio porro tenetur itaque voluptatum optio! Architecto sint similique perferendis, repudiandae corporis unde minima." ,
        Valor: 12.0,
        DescComp: "Descrição completa de teste 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minus labore aliquid distinctio aperiam itaque est rem dignissimos doloremque repellendus non accusamus fugiat tempore eveniet aspernatur earum accusantium nobis laudantium.",
        Ingredientes: ["Pão", "Queijo", "Salame"],
        ID: 0,
        Conjunto: "Teste",
        Quantidade: 1,
      },
      {
        Nome: "Prato2",
        Descrição: "Descriçõa Prato",
        Valor: 12.0,
        DescComp: "Descrição detalhada do produto",
        Ingredientes: ["Pão", "Queijo", "Salame"],
        ID: 1,
        Conjunto: "Teste",
        Quantidade: 3,
      },
      {
        Nome: "Prato3",
        Descrição: "Descriçõa Prato",
        Valor: 12.0,
        DescComp: "Descrição detalhada do produto",
        Ingredientes: ["Pão", "Queijo", "Salame"],
        ID: 2,
        Conjunto: "Teste",
        Quantidade: 2,
      },
      ])
      
      const [ItemsCardapio, setItemsCardapio]  = useState<PratoType[]>([
        {
          Nome: "Prato1",
          Descrição: "Descriçõa Prato: Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit amet, ex accusamus deleniti, blanditiis illo distinctio porro tenetur itaque voluptatum optio! Architecto sint similique perferendis, repudiandae corporis unde minima." ,
          Valor: 12.0,
          DescComp: "Descrição completa de teste 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minus labore aliquid distinctio aperiam itaque est rem dignissimos doloremque repellendus non accusamus fugiat tempore eveniet aspernatur earum accusantium nobis laudantium.",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 0,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato2",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 1,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato3",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 2,
          Conjunto: "Teste2",
        },
        {
          Nome: "Prato4",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 3,
          Conjunto: "Teste2",
        },
        {
          Nome: "Prato5",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 4,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato6",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 5,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato7",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 6,
          Conjunto: "Teste2",
        },
        {
          Nome: "Prato8",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 7,
          Conjunto: "Teste",
        },
        {
          Nome: "Prato9",
          Descrição: "Descriçõa Prato",
          Valor: 12.0,
          DescComp: "Descrição detalhada do produto",
          Ingredientes: ["Pão", "Queijo", "Salame"],
          ID: 8,
          Conjunto: "Teste2",
        },
      ]);
      
      const Conjuntos: string[] = ["Teste", "Teste2"];

      const EstadoPedido = [
        "Recebido pelo restaurante",
        "Pedido em preparação",
        "Pronto para coleta",
        "Saiu para entrega",
        "Pedido finalizado"
      ]
      
      const ValorTotal = carrinho.reduce((acc, item)=> acc + item.Valor,0)

      const Pedido: PedidoType = {
        ID: '0001',
        EstadoPedido: EstadoPedido[0],
        ValorTotal,
        ListaItens: carrinho,
        TempoPedido
      }

      useEffect(()=>{
        setTempoPedido(carrinho.length * 10)

        const novoCarrinho = carrinho.filter((item) => item.Quantidade > 0);

        if (novoCarrinho.length !== carrinho.length) {
          setCarrinho(novoCarrinho);
        }

      },[carrinho])

      function AddingToCartItem(ItemKey: number){
        const ItemFind = ItemsCardapio.find((Item)=>Item.ID == ItemKey)
        if(ItemFind){
          setCarrinho((prevCarrinho) => {
            const JaExiste = prevCarrinho.find((Item) => Item.ID === ItemFind.ID);
      
            if (JaExiste) {
              
              return prevCarrinho.map((item) =>
                item.ID === ItemFind.ID ? { ...item, Quantidade: item.Quantidade + 1 } : item
              );
            } else {
              
              return [...prevCarrinho, { ...ItemFind, Quantidade: 1 }];
            }
          });
        }
      } 

      function ChangeQuantity(metodo: string, IdItem: number) {
        setCarrinho((prevItens) =>
          prevItens.map((item) =>
            item.ID === IdItem
              ? {
                  ...item,
                  Quantidade:
                    metodo === "menos"
                      ? Math.max(item.Quantidade - 1, 0)
                      : item.Quantidade + 1,
                }
              : item
          )
        );
      }

      function EditItemCardapio(NewItem: PratoType, OldItem: PratoType){
        setItemsCardapio((prevItens) => 
          prevItens.map((item)=>
          item.ID == OldItem.ID ? NewItem :  item
        )) 
        console.log(ItemsCardapio)
      }

  return (
    <CartContext.Provider value={{carrinho, Pedido, ItemsCardapio, Conjuntos, AddingToCartItem, ChangeQuantity, EditItemCardapio}}>
      {children}
    </CartContext.Provider>
  )
}


