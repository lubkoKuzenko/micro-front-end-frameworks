import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

import Signin from "./components//Signin";
import Signup from "./components//Signup";

const generateClassName = createGenerateClassName({ productionPrefix: "auth" });

export default ({ history }) => {
  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={Signin} />
            <Route exact path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </React.Fragment>
  );
};
