/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import axios from "axios";

const Motivation = () => {
  const [state, setState] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;

    const saveData = async () => {
      await axios.post("/api/votes", {
        motivation: state
      });
    };

    saveData();
  }, [done]);

  return (
    <textarea
      onBlur={() => setDone(true)}
      onFocus={() => setDone(false)}
      value={state}
      onChange={e => setState(e.target.value)}
      css={css`
        margin-top: 16px;
        color: sienna;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        width: 100%;
        box-sizing: border-box;
        resize: none;
        outline: none;
        border: none;
        padding: 32px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        background-color: white;
      `}
      type="text"
      multiline
      rows={7}
    />
  );
};

export default Motivation;
