import styled from "styled-components";
import { iStyledButtonProps } from "../buttonInterface";

export const StyledDefaultButton = styled.button<iStyledButtonProps>`
  height: 60px;
  min-width: 60px;

  padding: 0 20px;

  background-color: ${({ btnGreen }) =>
    btnGreen ? "var(--primary-color100)" : "var(--color-grey1)"};
  color: ${({ btnGreen }) => (btnGreen ? "#FFF" : "var(--color-grey4)")};

  :hover {
    background-color: ${({ btnGreen }) =>
      btnGreen ? "var(--primary-color50)" : "var(--color-grey4)"};
    color: ${({ btnGreen }) => (btnGreen ? "#FFF" : "var(--color-grey1)")};
  }
`;
