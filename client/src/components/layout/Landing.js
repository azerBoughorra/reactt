import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <Container>
            <Row>
              <h1 className="x-large">Guest House</h1>
            </Row>
            <Row><p className="lead">
              Find and book deals on the best guest houses in Tunis, Tunisia! Explore guest reviews and book the perfect guest house for your trip.
          </p>
            </Row>
            <Row className="justify-content-md-center">
                <Link
                  to="/register" className="link-btn">
                  <Button variant="primary" className="medium-btn primary-btn">
                    <span>Register</span>
                  </Button>
                </Link>

                <Link
                  to="/login" className="link-btn">
                  <Button variant="primary" className="medium-btn primary-btn">
                    <span>Login</span>
                  </Button>
                </Link>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Landing;
