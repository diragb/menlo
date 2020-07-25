// Packages:
import React from "react";
import ReactDOM from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider } from "react-redux";

// Imports:
import store from "./store";
import "./index.css";

// Components:
import App from "./App";

// Exports:
ReactDOM.render(
  <Provider store={store}>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </Provider>,
  document.getElementById("root")
);
