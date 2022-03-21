import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        overflow-x: hidden;
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

    .fullWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .darkenBackground {
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
    }

    .bannerInner {
        color: #fff;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        margin: auto;
        
        h1 {
            font-size: 3rem;
            font-weight: 400;
            margin-bottom: 30px;
        }

        h2 {
            font-size: 2rem;
            font-weight: 400;
            margin-bottom: 20px;
        }

        p {
            font-size: 1.1rem;
            font-weight: 300;
            letter-spacing: 1px;
        }
    }
`;