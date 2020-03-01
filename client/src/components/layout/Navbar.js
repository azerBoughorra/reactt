import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/"><Navbar.Brand href="#">House Me Now</Navbar.Brand></Link>
      <Nav className="mr-auto">
        <Link to="/register"><Nav.Link href="#features">Register</Nav.Link></Link>
        <Link to="/login"><Nav.Link href="#pricing">Login</Nav.Link></Link>
      </Nav>
    </Navbar>
  )
}

export default Navbarr;