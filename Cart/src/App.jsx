import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "Ecom/store";
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
