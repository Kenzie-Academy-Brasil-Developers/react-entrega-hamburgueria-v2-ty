import { iButtonProps } from "../buttonInterface";
import { StyledDefaultButton } from "./style";

export function DefaultButton({ type, btnGreen, onClick, children }: iButtonProps) {
  return (
    <StyledDefaultButton type={type} btnGreen={btnGreen} onClick={onClick}>
      {children}
    </StyledDefaultButton>
  );
}
