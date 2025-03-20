import ItemPedido from "./ItemPedidoType";


type PedidoType = {
    ID: string;
    EstadoPedido: string[];
    PosiçãoEstadoPedido: number;
    ValorTotal: number;
    ListaItens: ItemPedido[];
    TempoPedido: number;
}

export default PedidoType;