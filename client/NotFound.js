/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
    <h3
      css={css`
        background-color: white;
        border-radius: 4px;
        padding: 32px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      `}
    >
      🥴 ...slut på öl? Gå till <a href="/">startsidan</a>.
    </h3>
  </div>
);

export default NotFound;
