import "./App.css";
import Main from "./components/Main";
import NoItems from "./components/options/NoItems";
import Options from "./components/options/Options";
import PratoType from "./types/PratoType";

function App() {
  const ItemsCardapio: PratoType[] = [
    {
      Nome: "Prato1",
      Descrição: "Descriçõa Prato",
      Valor: 12.0,
      DescriçãoDetalhada: "Descrição detalhada do produto",
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

  return (
      <Main>
        <div className="MainCardapioPage">
          <h1>Cardapio Web</h1>
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
          <button className="ButaoConclusaoP">Conclusão de pedido</button>
        </div>
      </Main>
  );
}

export default App;
