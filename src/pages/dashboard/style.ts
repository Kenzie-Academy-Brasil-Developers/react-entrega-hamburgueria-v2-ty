import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-white);

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledHeader = styled.header`
  padding: 14px 0;
  background-color: var(--color-grey1);

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .container > div:last-child {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  .container > div:last-child > div {
    position: relative;
    display: flex;
    width: 65%;
  }

  .container > div:last-child > div button {
    width: 100%;
  }

  img {
    width: 140px;
  }

  .cart_length {
    background-color: red;
    min-width: 20px;
    height: 30px;

    padding: 0 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-white);

    border-radius: 6px;

    position: absolute;
    top: -10px;
    right: -10px;
  }

  .container div:last-child button:last-child {
    background-color: var(--color-grey2);

    width: 30%;

    :hover {
      background-color: var(--color-grey4);
    }
  }
`;

export const StyledMain = styled.main`
  ul {
    display: flex;
    gap: 1rem;

    overflow-x: auto;
  }
`;
