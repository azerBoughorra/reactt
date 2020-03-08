import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ControlledCarousel from './components/layout/Carousel';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ProtectedRoute } from './utils/protected.route';
import { Logged } from './components/dashboard/logged';
import { addHouse } from './components/add-house/add.house';

const App = () =>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={ControlledCarousel} />
      <Route exact path="/" component={Dashboard} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/logged" component={Logged} />
          <ProtectedRoute exact path="/add" component={addHouse} />

        </Switch>
      </section>
    </Fragment>
  </Router>

export default App;