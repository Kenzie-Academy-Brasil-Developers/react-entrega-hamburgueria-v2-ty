import styled from "styled-components";

export const StyledDiv = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

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

  img {
    width: 140px;
  }

  .header_items {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
  }

  .header_btns {
    display: flex;
    justify-content: space-between;
  }

  .header_btns > button {
    background-color: var(--color-grey2);

    width: 30%;

    :hover {
      background-color: var(--color-grey4);
    }
  }

  .header_btns_cart {
    position: relative;

    width: 65%;
  }

  .header_btns_cart button {
    width: 100%;
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

  @media (min-width: 1024px) {
    .container {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .header_items {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 700px;
    }

    .header_btns {
      width: 400px;
    }

    .header_btns > button {
      width: 33%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header_btns_cart {
      position: relative;

      width: 60%;
    }

    .header_btns_cart > button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header_btns_cart button {
      width: 100%;
    }
  }
`;

export const StyledMain = styled.main`
  padding-bottom: 16px;

  ul {
    display: flex;
    gap: 1rem;

    overflow-x: auto;
  }

  @media (min-width: 1024px) {
    min-width: 100%;

    ul {
      flex-wrap: wrap;
      gap: 3rem;
    }
  }
`;
