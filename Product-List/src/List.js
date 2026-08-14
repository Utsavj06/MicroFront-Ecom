import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "./Assets/Products";
import Product from "./Components/EachProduct/Product";
import { Col, Row } from "react-bootstrap";

const App = () => (
  <div className="container">
    <Row>
      {Products.map(
        (
          prdct // Check for Products and Iterate over Products
        ) => (
          <Col md={3} sm={6} key={prdct.id}>
            <Product getProduct={prdct} />
          </Col>
        )
      )}
    </Row>
  </div>
);

export default App;