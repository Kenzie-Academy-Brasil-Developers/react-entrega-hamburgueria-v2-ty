import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { StyledCard } from "./style";
import { iProductsType } from "../../../contexts/UserContext";

interface iCardProps {
  item: iProductsType;
}

export function Card({ item }: iCardProps) {
  
  const { removeCartItem } = useContext(CartContext);

  return (
    <StyledCard>
      <img src={item.img} alt={item.name} />
      <div>
        <div>
          <h3 className="title3">{item.name}</h3>
          <button onClick={() => removeCartItem(item)}>Remover</button>
        </div>
        <p className="caption">{item.category}</p>
      </div>
    </StyledCard>
  );
}
