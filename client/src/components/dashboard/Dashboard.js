
import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import axios from "axios";
import useDispatch from 'react-redux';

class Dashboard extends Component {
  dispatch = useDispatch();

  state = {
    houses: []
  }

  findGuestHouse() {
    axios
      .get("/api/house/findAll")
      .then(res => { this.setState({ houses: res.data }) })
  }


  render() {
    this.findGuestHouse();
    return (
      <div className="container">
        {this.state.houses.length > 0 ?
          this.state.houses.map(house =>
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
                <button variant="primary" onClick={useDispatch(Reserve)}>Go somewhere</button>
                </Card.Footer>
              </Card.ImgOverlay>
            </Card>
          ) : null
        }
      </div>
    )
  }
}

export default Dashboard;