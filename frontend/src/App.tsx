// Packages:
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Constants:
import { ROUTES } from "./routes";

// Components:
import Navbar from "./components/global/Navbar";
import Landing from "./views/Landing";

// Functions:
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.INDEX} component={Landing} />
      </Switch>
    </Router>
  );
};

export default App;
