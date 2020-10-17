/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Start from "./Start";
import Beers from "./Beers";
import NotFound from "./NotFound";

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path="/beer/:beerIndex">
          <Beers />
        </Route>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </Fragment>
);

export default App;
