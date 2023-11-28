import React from "react-dom";
import Container from "./Components/Container";
import Nav from "./Components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import "./styles/index.css";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Nav />
        </Router>
      </Container>
    </>
  );
}

export default App;
