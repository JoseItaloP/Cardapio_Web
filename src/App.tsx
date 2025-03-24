import "./App.css";
import Main from "./components/Main";
import Conjunto from "./components/ConjuntoPrato/Conjunto";
import Confirmacao from "./components/Confirmação";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

function App() {
  const [ShowConfirm, setShowConfirm] = useState(false);

  return (
    <Main>
      <div className="MainCardapioPage">
        <h1>Cardapio Web</h1>
        <Conjunto />
        <div className={`${ShowConfirm ? "ShowBox" : "disableBox"}`}>
          <section className="AlignConfirmDiv">
            <IoCloseSharp className="CloseIcon" onClick={() => setShowConfirm(false)}/>
            <Confirmacao />
          </section>
        </div>
        <button
          className="ButaoConclusaoP"
          onClick={() => setShowConfirm(true)}
        >
          Conclusão do pedido
        </button>
      </div>
    </Main>
  );
}

export default App;
