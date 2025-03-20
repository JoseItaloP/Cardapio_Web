import "./App.css";
import Main from "./components/Main";
import Conjunto from "./components/ConjuntoPrato/Conjunto";


function App() {
  

  return (
      <Main>
        <div className="MainCardapioPage">
          <h1>Cardapio Web</h1>
          <Conjunto />
          <button className="ButaoConclusaoP">Conclusão de pedido</button>
        </div>
      </Main>
  );
}

export default App;
