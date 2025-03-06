import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="MainCardapioPage">
        <h1>Cardapio Web</h1>
        <div className="DivPagePedido">

          <section className="ConjuntoTipoPratos">
            <h1>Conjunto de tipos de pratos</h1>  
            <ul className="ListaDPratos">
              <li className="CaixaPrato">
                <h2>Nome do prato</h2>
                <p>Descrição do prato</p>
                <strong>Valor do prato</strong>
                <button>Adicionar ao carinho</button>
              </li>
            </ul>
          </section>

          <button className="ButaoConclusaoP">Conclusão de pedido</button>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
