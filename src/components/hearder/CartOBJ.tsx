import { useContext, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { IoCloseSharp } from "react-icons/io5";

export default function CartOBJ() {
  const { carrinho } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Atualiza isMobile quando a tela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="CartOBJ">
      <div
        className="CartContainer"
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        <FaShoppingCart
          className="cartIcon"
          onClick={() => isMobile && setIsOpen(true)}
        />

        {isOpen && (
          <div className={`CardDiv ${isMobile ? "mobile" : "desktop"}`}>
            <div className={`InsideDivList ${isMobile ? "mobile" : "desktop"}`}>
              <IoCloseSharp
                className={`CloseIcon ${isMobile ? "mobile" : "desktop"}`}
                onClick={() => setIsOpen(false)}
              />
              <ul className="CartList">
                {carrinho.map((item) => (
                  <li key={item.ID} className="ItenNameCart">
                    {item.Nome} - x{item.Quantidade}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="NumberOfItens">{carrinho.length}</div>
    </div>
  );
}
