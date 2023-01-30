import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';


const PrimaryNav = () => {
  return (
    myNav()

  
  )
}

export default PrimaryNav

const myNav = () =>  {return (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/person" className="nav-link">Person</NavLink>
            <NavLink to="/welcome" className="nav-link">Welcome</NavLink>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/crud" className="nav-link">Crud</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  </>)
};

 