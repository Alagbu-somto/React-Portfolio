import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "images/desktop.png"}
              alt="tech icon"
              width="30"
              height="30"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Hire-me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
