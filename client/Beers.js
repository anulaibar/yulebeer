/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import BeerCard from "./BeerCard";
import Rater from "./Rater";

const Beers = ({ beer }) => (
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
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div>
          {beer && beer.id && beer.id > 1 && (
            <Link
              css={css`
                padding-right: 64px;
                font-size: 64px;
                text-decoration: none;
                color: black;
              `}
              to={`/beer/${beer.id - 1}`}
            >
              &lsaquo;
            </Link>
          )}
        </div>
        <div>
          {beer && beer.id && beer.id < 12 && (
            <Link
              css={css`
                padding-left: 64px;
                font-size: 64px;
                text-decoration: none;
                color: black;
              `}
              to={`/beer/${beer.id + 1}`}
            >
              &rsaquo;
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

Beers.propTypes = {
  beer: PropTypes.shape({ id: PropTypes.number })
};

const mapStateToProps = (state, ownProps) => {
  const beer = state.beers.find(b => b.id == ownProps.beerId);
  return {
    beer,
    error: state.beersError,
    isLoading: state.beersLoading
  };
};

export default connect(mapStateToProps)(Beers);
