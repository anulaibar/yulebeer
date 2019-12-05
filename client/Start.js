/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";

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
          color: black;
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
