import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { selectAuthInformation } from '../../redux-selectors/auth.selector';
import { selectReservedHouses } from '../../redux-selectors/guest-house.selectors';

import { Dialog } from 'primereact/dialog';
import CardUI from './../house-card/CardUI';

export const Navbarr = (props) => {
  const dispatch = useDispatch();
  const authInformation = useSelector(selectAuthInformation);
  const reservedHouses = useSelector(selectReservedHouses);

  const disconnect = () => {
    logoutUser()(dispatch)

  }
  const add = () => { 
    console.log(props);
    
    props.history.push('/add')
   }



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (house) => {
    if (reservedHouses && reservedHouses.length > 0) { setShow(true) }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand className="brand-name">House Me Now</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {
            (authInformation.isAuthenticated) ?
              (
                <Nav>
                  <Link className="nav-link" to="/add">Add house</Link>
                  <Nav.Link onClick={() => disconnect()} href="#features">logout</Nav.Link>
                  <i className="fas fa-shopping-cart" onClick={handleShow}></i>
                  <span className="cart-items">{reservedHouses.length}</span>
                </Nav>
              )
              :
              (<Nav>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
              </Nav>)
          }

        </Navbar.Collapse>
      </Navbar >

      <Dialog className="chart-dialog" header="Chart" visible={show} modal={true} show={show} onHide={handleClose}>
        <div className="container-fluid row">
          {reservedHouses.map(e => {
            return (<div className="col-md-12">
              <CardUI house={e} history={props.history} /> </div>)
          }
          )}
        </div>
      </Dialog>
    </div>
  )
}

export default Navbarr;