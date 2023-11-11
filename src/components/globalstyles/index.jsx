import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    }
    body{
        background: #FFD335 url(./body-bg.png) repeat;
    }
    ::-webkit-scrollbar {
        background-color: #FFD335;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background: #f1f1f1;
    }
`

export default GlobalStyles