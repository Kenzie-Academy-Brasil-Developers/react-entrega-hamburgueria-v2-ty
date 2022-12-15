import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;

  position: relative;

  input {
    box-sizing: border-box;

    width: 100%;
    height: 60px;

    background-color: #fff;
    color: var(--color-black);

    padding: 0 15px;

    border: 2px solid var(--color-grey2);
    border-radius: var(--default-radius);
    outline: none;

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input:focus {
    border: 2px solid var(--color-grey4);
  }

  input::placeholder {
    color: var(--color-grey3);
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;
