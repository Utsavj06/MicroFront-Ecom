import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "./Assets/Products";
import Product from "./Components/EachProduct/Product";
import { Col, Row } from "react-bootstrap";
import { StoreProvider } from "Ecom/store";

const App = () => (
  <StoreProvider>
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
  </StoreProvider>
);

export default App;


function mount(el) {
  console.log("here", el)
  if(el) {
    ReactDOM.render(<App />, el);
  }
}

if(process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#product")
  if(devRoot)
    mount(devRoot);
}

export { mount };
