import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 400px;

  img {
    width: 200px;
  }

  div {
    box-sizing: border-box;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 10px;

    border: 2px solid var(--color-grey1);
    border-radius: var(--default-radius);
  }

  .bag_square {
    min-width: 60px;
    min-height: 60px;

    background-color: #27ae5f20;
    color: var(--primary-color100);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;

    border-radius: var(--default-radius);
  }
`;
