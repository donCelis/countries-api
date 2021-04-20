import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { ProviderContries } from "./context";
import Routes from "./routes";

import "./styles/main.css";

ReactDOM.render(
  <React.StrictMode>
    <ProviderContries>
      <Routes />
    </ProviderContries>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();