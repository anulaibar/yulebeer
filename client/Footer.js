/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { useTheme } from "emotion-theming";

const Footer = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        height: 200px;
        padding: 32px;
        background-color: ${theme.footer.backgroundColor};
        color: ${theme.footer.color};
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          font-size: 32px;
          color: inherit;
        `}
        to="/"
      >
        Start
      </Link>
      <Link
        css={css`
          text-decoration: none;
          font-size: 32px;
          color: inherit;
        `}
        to="/about"
      >
        About
      </Link>
      {children}
    </div>
  );
};

export default Footer;
