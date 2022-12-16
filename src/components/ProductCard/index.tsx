import { MediumButton } from "../Button/Medium";
import { StyledCard } from "./style";
import { iProductsType } from "../../contexts/UserContext";

interface iItem {
  item: iProductsType;
}

export function Card({ item, ...rest }: iItem) {

  return (
    <StyledCard>
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>
        <h2 className="title2">{item.name}</h2>
        <p className="caption">{item.category}</p>
        <p className="body">
          {item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <MediumButton btnGreen {...rest}>
          Adicionar
        </MediumButton>
      </div>
    </StyledCard>
  );
}
