import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider, useStore } from "Ecom/store";

import "./index.css";
import { Checkout } from "./Checkout";

const App = () => (
  <StoreProvider>
  <div className="container">
    <Checkout />
  </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
