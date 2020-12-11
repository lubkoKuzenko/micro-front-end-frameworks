import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({ productionPrefix: "ma" });

console.log("container");

export default () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <MarketingApp />
        </StylesProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};
