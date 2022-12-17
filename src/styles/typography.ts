import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
.title1 {
    font-weight: 700;
    font-size: 1.625rem;
}

.title2 {
    font-weight: 700;
    font-size: 1.375rem;
}

.title3 {
    font-weight: 700;
    font-size: 1.125rem;
}

.title4 {
    font-weight: 700;
    font-size: 0.875rem;
}

.headline {
    font-weight: 600;
    font-size: 12px;

    color: var(--color-grey3);
}

.body {
    font-weight: 400;
    font-size: 0.875rem;

    color: var(--color-grey3);
}

.caption {
    font-weight: 400;
    font-size: 0.75rem;
    font-family: 'Inter', sans-serif;

    color: var(--color-grey4);
}

.title1,
.title2,
.title3,
.title4 {
    color: var(--color-black);

    font-family: 'Inter', sans-serif;
}
`;
