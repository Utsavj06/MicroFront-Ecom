import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "Ecom/store";
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
