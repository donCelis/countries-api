import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Main from "../pages/Main";
import Country from "../pages/Country";
import Error404 from "../pages/Error404";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/country" exact component={Country} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default Routes;
