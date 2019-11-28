/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Beer = ({ lit, onHover, onClick }) => (
  <span
    onMouseEnter={onHover}
    onClick={onClick}
    css={css`
      font-size: 54px;
      cursor: pointer;
      filter: ${lit ? "none" : "grayscale(100%)"};
      -webkit-tap-highlight-color: transparent;
    `}
  >
    🍺
  </span>
);

const Rater = () => {
  const [hoverId, setHoverId] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const ids = [1, 2, 3, 4, 5];
  const beers = ids.map(id => (
    <Beer
      key={id}
      lit={hoverId >= id || rating >= id}
      onHover={e => setHoverId(id)}
      onClick={e => {
        if (id === rating) {
          setRating(0);
          setHoverId(0);
        } else {
          setRating(id);
        }
      }}
    />
  ));
  return <div onMouseLeave={() => setHoverId(0)}>{beers}</div>;
};

export default Rater;
