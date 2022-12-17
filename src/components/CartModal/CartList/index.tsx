import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { Card } from "../Card";
import { TotalCart } from "../TotalCart";
import { StyledCartList } from "./style";

export function CartList() {
    
  const { currentSale } = useContext(CartContext);

  return (
    <StyledCartList>
      {currentSale.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      <TotalCart />
    </StyledCartList>
  );
}
