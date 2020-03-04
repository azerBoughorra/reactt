
import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Dashboard extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="p-3">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Img variant="top" src="../../../src/img/showcase.jpg" />
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn medium-btn primary-btn">Go somewhere</button>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="p-3">
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Img variant="top" src="../../img/img-car-1.jpg" />
          <Card.ImgOverlay>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </CardGroup>
    )
  }
}

export default Dashboard;