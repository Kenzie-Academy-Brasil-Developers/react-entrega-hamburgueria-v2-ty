import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color100: #27AE60;
    --primary-color50: #93D7AF;
    --secondary-color100: #EB5757;
    --color-grey4: #333333;
    --color-grey3: #828282;
    --color-grey2: #E0E0E0;
    --color-grey1: #F5F5F5;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --toastify-color-info: #155BCB;
    --toastify-color-success: #168821;
    --toastify-color-warning: #FFCD07;
    --toastify-color-error: #E60000;

    --default-radius: 0.5rem;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Inter', sans-serif;
    line-height: 1;
}

button {
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-weight: 600;

    border: none;
    border-radius: var(--default-radius);

    transition: .5s;
}

.container {
    width: 90vw;
    
    margin: 0 auto;
}
`;
