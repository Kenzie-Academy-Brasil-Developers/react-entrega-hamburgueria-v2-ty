import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { DefaultButton } from "../../Button/Default";
import { StyledTotalCart } from "./style";

export function TotalCart() {
    
  const { cartTotal, cleanCart } = useContext(CartContext);

  return (
    <StyledTotalCart>
      <div>
        <p className="headline">Total</p>
        <p className="body">
          {cartTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <DefaultButton onClick={() => cleanCart()}>Remover todos</DefaultButton>
    </StyledTotalCart>
  );
}
