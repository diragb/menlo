// Packages:
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Imports:
import store from "./store";
import "./index.css";

// Components:
import App from "./App";

// Exports:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
