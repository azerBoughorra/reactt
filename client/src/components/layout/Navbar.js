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

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/"><Navbar.Brand>House Me Now</Navbar.Brand></Link>
      <Nav className="mr-auto">
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


      </Nav>
    </Navbar>
  )

}

export default Navbarr;