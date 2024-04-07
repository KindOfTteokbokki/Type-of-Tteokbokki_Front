import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import backgroundPng from '../assets/backgroundBig.png';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-Regular';
        font-display: SWAP;
        src: url('/Pretendard-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        font-display: SWAP;
        src: url('/Pretendard-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard-SemiBold';
        font-display: SWAP;
        src: url('/Pretendard-SemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
    }

    @font-face{
        font-family:'DNFBitBitv2';
        font-display: SWAP;
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

        overflow-y: scroll;
	    -ms-overflow-style: none; /* IE and Edge */
	    scrollbar-width: none; /* Firefox */

	    ::-webkit-scrollbar {
		    display: none; /* Chrome, Safari, Opera*/
	    }
    }

    @media only screen and (max-width: 800px) {
        body {
            line-height: 1;
            font-family :'Pretendard-Regular' ,sans-serif;
            font-weight : 400;
            margin : 0 auto;
            height : 100%;
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
