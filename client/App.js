/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import BeerCard from "./BeerCard";
import Rater from "./Rater";

class App extends Component {
  componentDidMount() {
    // this.props.onMount();
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
                  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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

App.propTypes = {
  beers: PropTypes.array
};

const mapStateToProps = state => {
  return {
    beers: state.beers,
    error: state.beersError,
    isLoading: state.beersLoading
  };
};

export default connect(mapStateToProps)(App);
