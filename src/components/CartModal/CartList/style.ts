import styled from "styled-components";

export const StyledCartList = styled.div`
    box-sizing: border-box;

    width: 100%;
    min-height: 100px;

    padding: 20px;

    background-color: var(--color-white);

    border-radius: 0 0 var(--default-radius) var(--default-radius);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        width: 100%;
    }
`