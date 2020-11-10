/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const About = () => (
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
      <h1>About</h1>
      <div>
        <small>
          <i>Icons made by </i>
          <a
            href="https://www.flaticon.com/free-icon/beer_761767"
            title="Good Ware"
          >
            Good Ware
          </a>
          <i> and </i>
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          <i> from </i>
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </small>
      </div>
      <Link
        css={css`
          text-decoration: none;
          font-size: 32px;
        `}
        to="/"
      >
        ←
      </Link>
    </div>
  </div>
);

export default About;
