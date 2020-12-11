import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/marketingApp";
import Header from "./components/Header";

console.log("container");

export default () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </React.Fragment>
  );
};
