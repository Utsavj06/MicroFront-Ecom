import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Head from "./Components/Header/Head";

function App() {
  return (
    <div className="App">
      <Head />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
