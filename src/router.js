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
      <Router basename={"/build"}>
          <Switch>
            <Route path="/register">
              <Register/>
            </Route>    
          </Switch>
      </Router>
    );
}
