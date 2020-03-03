import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { selectAuthInformation } from '../../redux-selectors/auth.selector';

export const Navbarr = () => {
  const dispatch = useDispatch();
  const authInformation = useSelector(selectAuthInformation);
  const disconnect = () => {
    logoutUser()(dispatch)

  }
  if (authInformation.isAuthenticated) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand href="#">House Me Now</Navbar.Brand></Link>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => disconnect()} href="#features">logout</Nav.Link>

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