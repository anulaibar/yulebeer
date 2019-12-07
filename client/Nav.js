/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Nav = props => {
  const { prev, next } = props;
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>
        {prev && (
          <Link
            css={css`
              padding-right: 64px;
              font-size: 64px;
              text-decoration: none;
              color: black;
              -webkit-tap-highlight-color: transparent;
            `}
            to={prev}
          >
            &lsaquo;
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link
            css={css`
              padding-left: 64px;
              font-size: 64px;
              text-decoration: none;
              color: black;
              -webkit-tap-highlight-color: transparent;
            `}
            to={next}
          >
            &rsaquo;
          </Link>
        )}
      </div>
    </div>
  );
};

Nav.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const { beers } = state;
  const beerId = Number(ownProps.beerId);
  const prev = beerId > 0 ? `/beers/${beerId - 1}` : null;
  const next = beerId < beers.length - 1 ? `/beers/${beerId + 1}` : null;
  return {
    prev,
    next
  };
};

export default connect(mapStateToProps)(Nav);
