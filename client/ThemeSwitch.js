/** @jsx jsx */
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import LightIcon from "./themeSwitchLight.svg";
import DarkIcon from "./themeSwitchDark.svg";

const ThemeSwitch = ({ onClick }) => {
  const theme = useTheme();
  return (
    <span
      onClick={onClick}
      css={css`
        margin-top: 8px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      `}
    >
      {theme.body.background === "gold" ? (
        <DarkIcon width={25} />
      ) : (
        <LightIcon width={25} />
      )}
    </span>
  );
};

ThemeSwitch.propTypes = {
  onClick: PropTypes.func
};
export default ThemeSwitch;
