/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const Start = () => (
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
      <h1>Start</h1>
      <Link
        css={css`
          text-decoration: none;
          font-size: 32px;
        `}
        to="/beer/1"
      >
        →
      </Link>
    </div>
  </div>
);

export default Start;
