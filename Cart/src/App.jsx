import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import { StoreProvider, useStore } from "Ecom/store";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from "./CartItem";
import { Container } from "react-bootstrap";

const App = () => (
  <StoreProvider>
  <Container>
    <CartItem />
  </Container>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
