/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        height: 100%;
        font-family: "Open Sans", sans-serif;
        background-color: #ffc107;
        box-sizing: border-box;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Lora", serif;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
);

export default GlobalStyles;
