import styled from "styled-components";

export const StyledTotalCart = styled.div`
    border-top: 2px solid var(--color-grey2);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-top: 1rem;

    div {
        display: flex;
        justify-content: space-between;
    }

    p:first-child {
        font-weight: 600;
        font-size: 1rem;
        color: var(--color-grey4);
    }

    p + p {
        color: var(--color-grey3);
        font-weight: 600;
    }
`