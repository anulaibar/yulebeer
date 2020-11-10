/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import BeerCard from "./BeerCard";
import Rater from "./Rater";
import Motivation from "./Motivation";

const Beers = ({ beers }) => {
  const match = useRouteMatch("/beer/:beerIndex");
  const beerIndex = Number(match.params.beerIndex);
  const beer = beers[beerIndex - 1];
  const first = beerIndex === 1;
  const last = beerIndex === beers.length;
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
        <Motivation />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div>
            {!first && (
              <Link
                css={css`
                  padding-right: 64px;
                  font-size: 64px;
                `}
                to={`/beer/${beerIndex - 1}`}
              >
                &lsaquo;
              </Link>
            )}
          </div>
          <div>
            {!last && (
              <Link
                css={css`
                  padding-left: 64px;
                  font-size: 64px;
                `}
                to={`/beer/${beerIndex + 1}`}
              >
                &rsaquo;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Beers.propTypes = {
  beers: PropTypes.array,
  beerIndex: PropTypes.number
};

const mapStateToProps = state => {
  const { beers } = state;
  return {
    beers
  };
};

export default connect(mapStateToProps)(Beers);
