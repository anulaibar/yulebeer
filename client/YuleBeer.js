/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getBeers } from "./actions";

class YuleBeer extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <Global
          styles={css`
            html,
            body {
              padding: 0;
              margin: 0;
              background: white;
              min-height: 100%;
              font-family: "Open Sans", sans-serif;
              background-color: gold;
              box-sizing: border-box;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: "Lora", serif;
            }
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
          `}
        />
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
                background-color: white;
                border-radius: 4px;
                padding: 16px;
                width: 90%;
                margin-bottom: 32px;
                @media (min-width: 500px) {
                  width: 400px;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                <img src={beer.imageurl} width={200} />
              </div>
              <h1>{beer.name}</h1>
              <p>{beer.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers,
    error: state.beersError,
    isLoading: state.beersLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => getBeers(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YuleBeer);
