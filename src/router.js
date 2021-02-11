import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './containers/auth/register'

export default function Routes() {
    return (
        <Router>
          <Switch>
            <Route exact path="/register">
              <Register/>
            </Route>
          </Switch>
      </Router>
    );
}
