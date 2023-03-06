import { createGlobalStyle } from "styled-components";

// styled-components in createGlobalStyle den GlobalStyles ürettik. resetledik. vs.
// App de bunu eklersek her tarafta uygulanır.

export const GlobalStyles = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }

 body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }

 p{
    line-height: 2;
    opacity: 0.7; //yazıya opacity verdik.
 }

`;
