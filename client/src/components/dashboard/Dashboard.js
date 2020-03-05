import axios from "axios";

import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux';
import { reserveHouseAction } from "../../redux-actions/guest-house.actions";
import { Container, Row, Col } from 'react-bootstrap'

class Dashboard extends Component {
  // dispatch = useDispatch();

  state = {
    houses: [],
    searchByName: '',
    searchByRegion: ''
  }

  findGuestHouse() {
    axios
      .get("/api/house/findAll")
      .then(res => { this.setState({ houses: res.data }) })
  }

  updateSearchRegion(event) {
    this.setState({ searchByRegion: event.target.value.substr(0, 20) });
  }

  updateSearchName(event) {
    this.setState({ searchByName: event.target.value.substr(0, 20) });
  }

  render() {
    this.findGuestHouse();
    let filteredhouses = this.state.houses.filter(e => {
      return e.region.toLowerCase().indexOf(this.state.searchByRegion.toLowerCase()) !== -1 && e.name.toLowerCase().indexOf(this.state.searchByName.toLowerCase()) !== -1
    })
    return (
      <div className="container">
        <Row>
          <Col sm="6"> Filtrer par région : <input type="text" placeholder="Région" value={this.state.searchByRegion} onChange={this.updateSearchRegion.bind(this)} /></Col>
          <Col sm="6"> Filtrer par Nom : <input type="text" placeholder="Nom" value={this.state.searchByName} onChange={this.updateSearchName.bind(this)} /></Col>
        </Row>
        {this.state.houses.length > 0 ?
          filteredhouses.map(house =>
            <Container fluid>
              <Row>
                <Col sm="4">
                  <Card className="bg-dark text-white">
                    <Card.Img src={house.image} alt="Card image" />
                    <Card.ImgOverlay>
                      <Card.Title>{house.name}</Card.Title>
                      <Card.Text>{house.region}</Card.Text>
                      <Card.Text>
                        {house.description}
                      </Card.Text>
                      <Card.Text>{house.rating}</Card.Text>
                      <Card.Footer>
                        <button variant="primary"> Go somewhere</button>
                      </Card.Footer>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </Container>
          ) : null
        }
      </div>
    )
  }
}

export default Dashboard;