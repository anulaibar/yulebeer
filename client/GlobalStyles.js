/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Open Sans", sans-serif;
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
        a {
          text-decoration: none;
          color: inherit;
          -webkit-tap-highlight-color: transparent;
        }
      `}
    />
  );
};

export default GlobalStyles;
