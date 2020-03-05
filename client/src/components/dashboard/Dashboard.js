
import React, { Component, useState } from "react";
import Card from 'react-bootstrap/Card'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { reserveHouseAction, cancelReserveHouseAction } from "../../redux-actions/guest-house.actions";
import { selectReservedHouses } from "../../redux-selectors/guest-house.selectors";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [houses, setHouses] = useState(null);
  const reservation = useSelector(selectReservedHouses)
  if (!houses) {
    axios
      .get("/api/house/findAll")
      .then(res => {
        setHouses(res.data);
        console.log('res', res);
      })
  }





  return (
    <div className="container">
      {houses && houses.length > 0 ?
        houses.map(house =>
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
                    <button variant="primary" onClick={() => dispatch(reserveHouseAction(house))}>Reserver</button>

                }
              </Card.Footer>
            </Card.ImgOverlay>
          </Card>
        ) : null
      }
    </div>
  )
}

export default Dashboard;