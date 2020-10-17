/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1>404</h1>
      <Link
        css={css`
          text-decoration: none;
          color: black;
          font-size: 32px;
        `}
        to="/"
      >
        ←
      </Link>
    </div>
  </div>
);

export default NotFound;
