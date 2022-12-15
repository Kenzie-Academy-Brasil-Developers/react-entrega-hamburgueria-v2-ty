import { iButtonProps } from "../buttonInterface";
import { StyledMediumButton } from "./style";

export function MediumButton({ type, btnGreen, onClick, children }: iButtonProps) {
  return (
    <StyledMediumButton type={type} btnGreen={btnGreen} onClick={onClick}>
      {children}
    </StyledMediumButton>
  );
}
