// Packages:
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Constants:
import { ROUTES } from "./routes";

// Components:
import Navbar from "./components/global/Navbar";
import Landing from "./views/Landing";
import Editor from "./views/Editor";

// Functions:
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={[ROUTES.INDEX, ROUTES.HOME]} component={Landing} />
        <Route exact path={ROUTES.EDITOR} component={Editor} />
      </Switch>
    </Router>
  );
};

export default App;
