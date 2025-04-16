import ItemPedido from "./ItemPedidoType";


type PedidoType = {
    ID: number;
    EstadoPedido: string;
    ValorTotal: number;
    ListaItens: ItemPedido[];
    TempoPedido: number;
}

export default PedidoType;