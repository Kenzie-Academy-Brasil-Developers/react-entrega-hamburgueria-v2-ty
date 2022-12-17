import { StyledEmptyCart } from "./style";

export function EmptyCart() {
    
  return (
    <StyledEmptyCart>
      <h3 className="title3">Sua sacola está vazia</h3>
      <p className="body">Adicione itens</p>
    </StyledEmptyCart>
  );
}
