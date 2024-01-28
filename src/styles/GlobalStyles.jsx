import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    #root {
        width: 390px;
        margin: 0 auto;
        background-color: white;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        margin : 0 auto;
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, button, input{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family : 'Spoqa Han Sans Neo' ,sans-serif;
        font-weight : 400;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
