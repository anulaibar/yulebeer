/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Start from "./Start";
import About from "./About";
import Beers from "./Beers";
import Tasting from "./Tasting";
import NotFound from "./NotFound";
import Main from "./Main";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { light, dark } from "./Themes";
import ThemeSwitch from "./ThemeSwitch";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Fragment>
        <GlobalStyles />
        <Router>
          <ScrollToTop />
          <Main>
            <Switch>
              <Route exact path="/tasting">
                <Tasting />
              </Route>
              <Route exact path="/beer/:beerIndex">
                <Beers />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Start />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Main>
          <Footer>
            <ThemeSwitch onClick={toggleTheme} />
          </Footer>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
