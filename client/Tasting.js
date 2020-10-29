/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Tasting = ({ beers }) => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1>Tasting</h1>
      {beers.map(beer => (
        <div key={beer.id}>{beer.name}</div>
      ))}
    </div>
  </div>
);

Tasting.propTypes = {
  beers: PropTypes.array
};

const mapStateToProps = state => {
  const { beers } = state;
  console.log(beers);
  return {
    beers
  };
};

export default connect(mapStateToProps)(Tasting);
