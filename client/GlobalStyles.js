/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          height: 100%;
          font-family: "Open Sans", sans-serif;
          box-sizing: border-box;
          background-color: ${theme.body.backgroundColor};
          color: ${theme.body.color};
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
