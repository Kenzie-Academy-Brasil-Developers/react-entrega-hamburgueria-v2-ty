import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMain = styled.main`
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-white);

  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  form {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 25px 15px;

    border: 2px solid var(--color-grey1);
    border-radius: var(--default-radius);

    width: 100%;
    max-width: 400px;
  }

  form > div {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      gap: 4rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-grey3);

  :hover {
    color: var(--primary-color100);
  }
`;
