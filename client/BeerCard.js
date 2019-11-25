/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import React from "react";

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
      padding: 16px;
    `}
  >
    {children}
  </div>
);

const BeerCard = ({ beer }) => {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div
      css={css`
        perspective: 1000px;
        height: 432px;
        margin-bottom: 16px;
        cursor: pointer;
      `}
      onClick={e => {
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
          <div css={css``}>
            <img src={beer.imageurl} width={200} />
          </div>
        </Face>
        <Face flipped>
          <h1>{beer.name}</h1>
          <p>{beer.description}</p>
        </Face>
      </div>
    </div>
  );
};

export default BeerCard;
