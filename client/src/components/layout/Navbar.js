import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { disconnect } from 'mongoose';

export const Navbarr = () => {
  const disconnect=()=>{
    localStorage.clear();

  }
  if (localStorage.getItem('jwtToken')){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand href="#">House Me Now</Navbar.Brand></Link>
        <Nav className="mr-auto">
        <Nav.Link onClick={()=>disconnect()} href="#features">logout</Nav.Link>

        </Nav>
      </Navbar>
    )
  }
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