import styled from "styled-components";

export const StyledCard = styled.div`
  box-sizing: border-box;

  display: flex;
  gap: 1rem;

  height: 70px;
  width: 100%;

  animation: fadein 1s;

  img {
    width: 70px;
    height: 70px;

    background-color: var(--color-grey2);

    border-radius: var(--default-radius);
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  div > h3 {
    max-width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  button {
    background-color: transparent;

    border: none;
    outline: none;

    color: var(--color-grey3);
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 500px) {
    div > h3 {
      max-width: 100ch;
    }
  }
`;
