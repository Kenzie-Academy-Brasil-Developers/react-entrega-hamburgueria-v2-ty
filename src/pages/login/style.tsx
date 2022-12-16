import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-white);

  main {
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
