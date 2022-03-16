import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .autoScrollChild {
        scroll-snap-align: start;
    }

    .gridContainer {
        display: grid;
        width: 100%;
        max-width: 1100px;
        margin: auto;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 20px;
    }

    .button {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 40px;
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        font-size: 1.3rem;
        text-transform: uppercase;
    }
`;