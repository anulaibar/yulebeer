/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { Router } from "@reach/router";
import GlobalStyles from "./GlobalStyles";
import Start from "./Start";
import Beer from "./Beer";
import NotFound from "./NotFound";

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router
      css={css`
        height: 100%;
      `}
    >
      <Beer path="/beers/:beerId" />
      <Start path="/" />
      <NotFound default />
    </Router>
  </Fragment>
);

export default App;
