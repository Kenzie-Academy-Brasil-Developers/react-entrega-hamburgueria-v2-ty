import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartList } from "./CartList";
import { EmptyCart } from "./EmptyCart";
import { StyledCartHeader, StyledModalWrapper } from "./style";
import { VscChromeClose } from "react-icons/vsc"

export function CartModal() {
    
  const { currentSale, setModal } = useContext(CartContext);

  return (
    <StyledModalWrapper>
      <div className="container">
        <div>
          <StyledCartHeader>
            <h3 className="title3">Carrinho de compras</h3>
            <button type="button" onClick={() => setModal(false)}><VscChromeClose /></button>
          </StyledCartHeader>
          {currentSale.length === 0 ? <EmptyCart /> : <CartList />}
        </div>
      </div>
    </StyledModalWrapper>
  );
}
