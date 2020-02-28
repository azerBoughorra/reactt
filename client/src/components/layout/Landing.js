import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Guest House</h1>
          <p className="lead">
          Find and book deals on the best guest houses in Tunis, Tunisia! Explore guest reviews and book the perfect guest house for your trip.
          </p>
          <div className="buttons">
            <Link 
            to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link 
            to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;
