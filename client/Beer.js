/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import PropTypes from "prop-types";
import BeerCard from "./BeerCard";
import Rater from "./Rater";
import Nav from "./Nav";

const Beer = ({ beer }) => {
  return (
    <div
      css={css`
        padding-top: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          width: 90%;
          margin-bottom: 32px;
          @media (min-width: 500px) {
            width: 400px;
          }
        `}
      >
        <Router>
          <BeerCard path="/" beer={beer} />
        </Router>
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
        <Router>
          <Nav path="/" />
        </Router>
      </div>
    </div>
  );
};

Beer.propTypes = {
  beer: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const beerId = Number(ownProps.beerId);
  const beer = state.beers[beerId];
  return {
    beer
  };
};

export default connect(mapStateToProps)(Beer);
