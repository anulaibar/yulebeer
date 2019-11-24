/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getBeers } from "./actions";
import GlobalStyles from "./GlobalStyles";
import BeerCard from "./BeerCard";
import Rater from "./Rater";

class App extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <div
          css={css`
            padding-top: 16px;
            display: flex;
            align-items: center;
            flex-direction: column;
          `}
        >
          {(this.props.beers || []).map(beer => (
            <div
              key={beer.id}
              css={css`
                width: 90%;
                margin-bottom: 32px;
                @media (min-width: 500px) {
                  width: 400px;
                }
              `}
            >
              <BeerCard beer={beer} />
              <div
                css={css`
                  background-color: white;
                  border-radius: 4px;
                  padding: 16px;
                `}
              >
                <Rater />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    error: state.beersError,
    isLoading: state.beersLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => getBeers(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
