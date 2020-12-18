import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthApp from "./components/authApp";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({ productionPrefix: "ma" });

export default () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </StylesProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};
