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

  .container div:last-child {
    display: flex;
    justify-content: space-between;
  }

  .container div:last-child button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
  }

  .container div:last-child button:first-child {
    width: 65%;
  }

  .container div:last-child button:last-child {
    width: 30%;
  }

  .container div:last-child button:last-child {
    background-color: var(--color-grey2);

    :hover {
      background-color: var(--color-grey4);
    }
  }

  img {
    width: 140px;
  }
`;

export const StyledMain = styled.main`
  ul {
    display: flex;
    gap: 1rem;

    overflow-x: auto;
  }
`