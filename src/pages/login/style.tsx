import styled from "styled-components";

export const StyledDiv = styled.div`
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

  .infos {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 400px;
  }

  .infos img {
    width: 200px;
  }

  .infos > div {
    box-sizing: border-box;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 10px;

    border: 2px solid var(--color-grey1);
    border-radius: var(--default-radius);
  }

  .login_container {
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

  .login_container p {
    text-align: center;
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
