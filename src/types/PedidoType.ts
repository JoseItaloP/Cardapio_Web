import ItemPedido from "./ItemPedidoType";


type PedidoType = {
    ID: string;
    EstadoPedido: string;
    ValorTotal: number;
    ListaItens: ItemPedido[];
    TempoPedido: number;
}

export default PedidoType;