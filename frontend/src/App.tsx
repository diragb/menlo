// Packages:
import React from "react";
import { Switch, Route } from "react-router-dom";

// Constants:
import { ROUTES } from "./routes";

// Components:
import Navbar from "./components/global/Navbar";
import CustomNavbar from "./components/global/CustomNavbar";
import Landing from "./views/Landing";
import Template from "./views/Template";

// Functions:
const App = () => {
  // Constants:
  const ROOT = ["localhost:8080", "menlo"];
  const SUBDOMAIN = window.location.host.split('.')[0];

  // Return:
  return (
    <>
      {
        !ROOT.includes(SUBDOMAIN)
        ?
        <Navbar />
        :
        <CustomNavbar SUBDOMAIN={SUBDOMAIN} />
      }
      <Switch>
        <Route exact path={[ROUTES.INDEX, ROUTES.HOME]} component={Landing} />
        <Route exact path={ROUTES.TEMPLATE} component={Template} />
      </Switch>
    </>
  );
};

export default App;
