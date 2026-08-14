import React from "react";
import ReactDOM from "react-dom"
import List from './List'
import "./index.css";
import { StoreProvider } from "Ecom/store";

const App = () => (
  <StoreProvider>
    <List />
  </StoreProvider>
);

ReactDOM.render(<App />, document.getElementById("product"));
export default App