import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #00000060;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container div {
    width: 100%;
    max-width: 600px;
  }
`;

export const StyledCartHeader = styled.div`
  box-sizing: border-box;

  background-color: var(--primary-color100);

  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  border-radius: var(--default-radius) var(--default-radius) 0 0;

  h3 {
    color: var(--color-white);
  }

  button {
    background-color: transparent;

    width: 30px;
    height: 30px;
    
    color: var(--color-white);
    
    font-size: 30px;

    padding: 0;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
