/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

const Face = ({ children, flipped }) => (
  <div
    css={css`
      height: 432px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      backface-visibility: hidden;
      position: absolute;
      border-radius: 4px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      top: 0;
      left: 0;
      z-index: 2;
      transform: ${flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
      background-color: white;
      padding: 32px;
      text-align: center;
    `}
  >
    {children}
  </div>
);

Face.propTypes = {
  children: PropTypes.node,
  flipped: PropTypes.bool
};

const BeerCard = ({ beer }) => {
  const [flipped, setFlipped] = React.useState(false);
  const { imageurl, name, description } = beer || {};
  return (
    <div
      css={css`
        perspective: 1000px;
        height: 432px;
        margin-bottom: 16px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      `}
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <div
        css={css`
          transition: 0.6s;
          transform-style: preserve-3d;
          transform: ${flipped && "rotateY(180deg)"};
        `}
      >
        <Face>
          <img
            css={css`
              max-width: 200px;
              max-height: 400px;
            `}
            src={imageurl}
          />
        </Face>
        <Face flipped>
          <h1>{name}</h1>
          <p>{description}</p>
        </Face>
      </div>
    </div>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageurl: PropTypes.string
  })
};

export default BeerCard;
