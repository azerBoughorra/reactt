import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { selectAuthInformation } from '../../redux-selectors/auth.selector';
import { selectReservedHouses } from '../../redux-selectors/guest-house.selectors';

export const Navbarr = () => {
  const dispatch = useDispatch();
  const authInformation = useSelector(selectAuthInformation);
  const reservedHouses = useSelector(selectReservedHouses);

  const disconnect = () => {
    logoutUser()(dispatch)

  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/"><Navbar.Brand>House Me Now</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          {
            (authInformation.isAuthenticated) ?
              (<Nav.Link onClick={() => disconnect()} href="#features">logout</Nav.Link>)
              :
              (<div>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </div>
              )
          }
          {reservedHouses.length}
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navbarr;