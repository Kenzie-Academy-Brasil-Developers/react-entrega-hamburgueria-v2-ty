import styled from "styled-components";

export const StyledCard = styled.div`
    min-width: 260px;
    height: 346px;

    background-color: var(--color-white);

    border: 2px solid var(--color-grey2);
    border-radius: var(--default-radius);

    :hover {
        border: 2px solid var(--primary-color100);
    }

    div:first-child {
        width: 100%;
        height: 150px;

        background-color: var(--color-grey1);

        display: flex;
        align-items: center;
        justify-content: center;
        
        border-radius: 6px 6px 0 0;
    }

    div > img {
        height: 100%;
    }

    div:last-child {
        box-sizing: border-box;

        width: 100%;
        height: 196px;

        padding: 25px 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div:last-child > button {
        width: 60%;
    }

    p + p {
        color: var(--primary-color100);
    }

    animation: fadein 1s;

    @keyframes fadein {
        0% {
            opacity:0
        }
        100% {
            opacity:1
        }
    }  
`