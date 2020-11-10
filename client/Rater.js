/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";
import GrayBeer from "./grayBeer.svg";
import LightBeer from "./lightBeer.svg";
import DarkBeer from "./darkBeer.svg";

const BeerIcon = ({ lit }) => {
  const theme = useTheme();
  if (!lit) return <GrayBeer width={50} />;
  return theme.body.background === "gold" ? (
    <DarkBeer width={50} />
  ) : (
    <LightBeer width={50} />
  );
};
BeerIcon.propTypes = {
  lit: PropTypes.bool
};

const Beer = ({ lit, onHover, onClick }) => {
  return (
    <span
      onMouseEnter={onHover}
      onClick={onClick}
      css={css`
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      `}
    >
      <BeerIcon lit={lit} />
    </span>
  );
};

Beer.propTypes = {
  lit: PropTypes.bool,
  onHover: PropTypes.func,
  onClick: PropTypes.func
};

const Rater = () => {
  const [hoverId, setHoverId] = useState(0);
  const [rating, setRating] = useState(0);
  const ids = [1, 2, 3, 4, 5, 6];
  const beers = ids.map(id => (
    <Beer
      key={id}
      lit={hoverId >= id || rating >= id}
      onHover={() => setHoverId(id)}
      onClick={() => {
        if (id === rating) {
          setRating(0);
          setHoverId(0);
        } else {
          setRating(id);
        }
      }}
    />
  ));
  return (
    <div
      onMouseLeave={() => setHoverId(0)}
      css={css`
        text-align: center;
      `}
    >
      {beers}
    </div>
  );
};

export default Rater;
