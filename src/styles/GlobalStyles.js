import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import mainBackground from '../assets/main_background.svg';
import backgroundPng from '../assets/backgroundBig.png';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face{
        font-family:'DNFBitBitv2';
        font-style:normal;
        font-weight:400;
        src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype');
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
    }  

    html {
        background-image : url(${backgroundPng});
        background-position: center;
        background-size:cover;
        background-repeat: no-repeat;
    }
    
    #root {
        width: 390px;
        height : 844px;
        margin: 0 auto;
        background-color: white;
        font-family: 'Pretendard-Regular';
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

    html{
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    html::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    body{
        line-height: 1;
        font-family : 'Pretendard-Regular' ,sans-serif;
        font-weight : 400;
        margin-left : 390px;
        height : 100vh;
    }

    @media only screen and (max-width: 600px) {
        body {
            line-height: 1;
            font-family : 'Pretendard-Regular' ,sans-serif;
            font-weight : 400;
            margin : 0 auto;
            height : 100vh;
        }
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
