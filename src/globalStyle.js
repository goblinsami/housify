import { createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;

}

a {
    text-decoration: none;
}
html, body {
    overflow-x: hidden;
}
`;

export default GlobalStyle;