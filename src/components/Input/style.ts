import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  input {
    box-sizing: border-box;

    width: 100%;
    height: 40px;

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
`;
