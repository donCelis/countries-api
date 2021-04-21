import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import CountryDetails from "../pages/CountryDetails";
import Error404 from "../pages/Error404";

const Routes = () => {
  return (
    <Router basename="countries-api">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:name" component={CountryDetails} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default Routes;
