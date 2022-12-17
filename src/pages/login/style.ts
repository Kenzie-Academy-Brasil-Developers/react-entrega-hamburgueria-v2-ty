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

  form p {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;

  color: var(--color-grey4);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey1);

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;

  border-radius: var(--default-radius);

  height: 40px;
  min-width: 60px;

  padding: 0 20px;

  transition: .5s;

  :hover {
    background-color: var(--color-grey4);
    color: var(--color-grey1);
  }
`;
