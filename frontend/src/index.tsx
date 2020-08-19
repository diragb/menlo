// Packages:
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider } from "react-redux";

// Imports:
import store from "./store";
import "./index.css";

// Components:
import App from "./App";

// Exports:
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
