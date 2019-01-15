import React from "react";
import ReactDOM from "react-dom";
import css from "./styled";

import "./styles.css";

function App() {
  const fontSize = "22px",
    radius = "4px";
  return (
    <div
      style={css`
        font-size: ${fontSize};
        border-radius: ${radius};
        background: #efefef;
        color: #fff;
        padding: 10px;
        transition: width 0.3s ease-in;
      `}
    >
      <button
        style={css`
          padding: 10px 15px;
          border: 0;
          border-radius: 4px;
          background: #333;
          color: #fff;
          outline: none;
        `}
      >
        Clique
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
