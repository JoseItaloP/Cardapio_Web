import { Link } from "react-router-dom";
import CartOBJ from "./hearder/CartOBJ";

export default function Header() {
  return (
    <header className="HeaderClass">
      <h1>
        <Link to="/">Este é o header da pagina</Link>
      </h1>
      <CartOBJ />
    </header>
  );
}
