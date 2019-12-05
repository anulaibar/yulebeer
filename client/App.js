/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { Router } from "@reach/router";
import GlobalStyles from "./GlobalStyles";
import Beers from "./Beers";
import NotFound from "./NotFound";

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router
      css={css`
        height: 100%;
      `}
    >
      <Beers path="/beer/:beerIndex" />
      <NotFound default />
    </Router>
  </Fragment>
);

export default App;
