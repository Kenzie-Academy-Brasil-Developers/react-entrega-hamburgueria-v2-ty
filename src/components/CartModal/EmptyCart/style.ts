import styled from "styled-components";

export const StyledEmptyCart = styled.div`
    background-color: var(--color-white);
    
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    border-radius: 0 0 var(--default-radius) var(--default-radius);

    h3 {
        color: var(--color-grey100);
    }

    p {
        color: var(--color-grey3);

        font-weight: 400;
    }    
`