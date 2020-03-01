import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import ControlledCarousel from './components/layout/Carousel';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import './App.css';

const App = () => 
  <Router>
  <Fragment>
    <Navbar />
    <Route exact path='/' component={Landing} />
    <Route exact path='/' component={ControlledCarousel} />
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
      </Switch>
    </section>
  </Fragment>
  </Router>

  export default App;