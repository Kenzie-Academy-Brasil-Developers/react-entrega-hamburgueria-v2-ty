import { InputHTMLAttributes } from "react";
import { MediumButton } from "../Button/Medium";
import { StyledContainer } from "./style"

interface iInputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
}

export function InputSearch({ onClick, ...rest }: iInputSearchProps) {
  return (
    <StyledContainer>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        {...rest}
      />
      <MediumButton btnGreen onClick={onClick}>
        Pesquisar
      </MediumButton>
    </StyledContainer>
  );
}
