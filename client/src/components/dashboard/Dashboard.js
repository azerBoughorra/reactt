
import React, { Component, useState } from "react";
import Card from 'react-bootstrap/Card'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { reserveHouseAction, cancelReserveHouseAction } from "../../redux-actions/guest-house.actions";
import { selectReservedHouses } from "../../redux-selectors/guest-house.selectors";
import { Button, Modal } from "react-bootstrap";
// import DatePicker from "react-datepicker";
import { Row, Col } from "react-bootstrap"

const Dashboard = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [houses, setHouses] = useState(null);
  const [selectedHouse, setselectedHouse] = useState(null);

  const [searchByRegion, setSearchByRegion] = useState('');
  const [searchByName, setSearchByName] = useState('');

  const reservation = useSelector(selectReservedHouses)
  const handleClose = () => setShow(false);
  const handleShow = (house) => {
    setselectedHouse(house)
    setShow(true)
  };


  if (!houses) {
    axios
      .get("/api/house/findAll")
      .then(res => {
        setHouses(res.data);
        console.log('res', res);
      })
  }


  const updateSearchRegion = (event) => {
    setSearchByRegion({ searchByRegion: event.target.value.substr(0, 20) });
  }

  const updateSearchName = (event) => {
    setSearchByName({ searchByName: event.target.value.substr(0, 20) });
  }

  return (
    <div className="container">

      <Row>
        <Col>Filtrer par région : <input type="text" placeholder="Région" value={searchByRegion} onChange={updateSearchRegion} /></Col>
        <Col>Filtrer par Nom : <input type="text" placeholder="Région" value={searchByName} onChange={updateSearchName} /></Col>
      </Row>
      {houses && houses.length > 0 ?
        houses.map(house => {
          if (house.name.indexOf(searchByName) !== -1 && house.region.indexOf(searchByRegion) !== -1 ) {
          return (
            <Card className="bg-dark text-white">
              <Card.Img src={house.image} alt="Card image" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title>{house.name}</Card.Title>
                <Card.Text>{house.region}</Card.Text>
                <Card.Text>
                  {house.description}
                </Card.Text>
                <Card.Text>{house.rating}</Card.Text>
                <Card.Footer>
                  {
                    reservation.find(h => h._id == house._id) ?
                      <button variant="primary" onClick={() => dispatch(cancelReserveHouseAction(house._id))}>Annuler la reservation</button>
                      :
                      <button variant="primary" onClick={() => handleShow(house)}>Reserver</button>

                  }
                </Card.Footer>
              </Card.ImgOverlay>
            </Card>
          )} 
          else { return ''}
        }) : null
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedHouse ? selectedHouse.name : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Date de reservation :
          {/* <DatePicker onChange={date => setselectedHouse({ ...selectedHouse, reserveDate: date })} /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
            disabled={selectedHouse && !selectedHouse.reserveDate}
            onClick={() => {
              dispatch(reserveHouseAction(selectedHouse));
              setselectedHouse(null);
              handleClose();
            }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}

export default Dashboard;