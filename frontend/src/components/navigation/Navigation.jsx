//imports
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            Piuma Impresiones
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="text-center">
            <LinkContainer exact to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tienda">
              <Nav.Link>Tienda</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactanos">
              <Nav.Link>Contactanos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/nosotras">
              <Nav.Link>Nosotras</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
