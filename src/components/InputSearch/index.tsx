import { MediumButton } from "../Button/Medium";
import { StyledContainer } from "./style"

interface iInputSearchProps {
  onClick?: () => void;
  value?: string;
  onChange?: () => void;
}

export function InputSearch({ value, onChange, onClick }: iInputSearchProps) {
  return (
    <StyledContainer>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        value={value}
        onChange={onChange}
      />
      <MediumButton btnGreen onClick={onClick}>
        Pesquisar
      </MediumButton>
    </StyledContainer>
  );
}
