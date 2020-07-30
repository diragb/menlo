// Packages:
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Constants:
import { ROUTES } from "./routes";

// Components:
import Navbar from "./components/global/Navbar";
import Landing from "./views/Landing";
import Template from "./views/Template";

// Functions:
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={[ROUTES.INDEX, ROUTES.HOME]} component={Landing} />
        <Route exact path={ROUTES.TEMPLATE} component={Template} />
      </Switch>
    </Router>
  );
};

export default App;
