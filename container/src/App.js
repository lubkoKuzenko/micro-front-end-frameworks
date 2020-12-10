import React from "react";

import MarketingApp from "./components/marketingApp";

console.log("container");

export default () => {
  return (
    <React.Fragment>
      <h1>Header</h1>
      <hr />
      <MarketingApp />
    </React.Fragment>
  );
};
