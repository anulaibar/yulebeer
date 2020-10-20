/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

const Main = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background: ${theme.body.background};
        background: ${theme.body.backgroundRadient};
        color: ${theme.body.color};
        min-height: 100vh;
      `}
    >
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
