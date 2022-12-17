import { iButtonProps } from "../buttonInterface";
import { StyledMediumButton } from "./style";

export function MediumButton({ type, btnGreen, onClick, children, ...rest }: iButtonProps) {
  return (
    <StyledMediumButton type={type} btnGreen={btnGreen} onClick={onClick} {...rest}>
      {children}
    </StyledMediumButton>
  );
}
