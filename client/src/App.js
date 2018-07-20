import React, { Component } from 'react';
import './App.css';

import 'react-datepicker/dist/react-datepicker.css';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge
} from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom'


import RefundDetails from './components/RefundDetails/refundDetails';
import Report from './components/RefundDetails/ShowReports';
import Login from './components/Auth/login';
import Register from'./components/Auth/register';




class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Navbar color="dark" inverse expand="md">
            <NavbarBrand href="/"><Badge color="secondary">Automation Refunds</Badge></NavbarBrand>
            <NavbarToggler />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/"><Badge color="secondary">Home</Badge></Link>
              </NavItem>
              <NavItem>
                <Link to="/report"><Badge color="secondary">Report</Badge></Link>
              </NavItem>
              <NavItem>
                <Link to="/login"><Badge color="secondary">Login</Badge></Link>
              </NavItem>
              <NavItem>
                <Link to="/register"><Badge color="secondary">Register</Badge></Link>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={RefundDetails} />
            <Route path="/report" component={Report} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </div >
    );


  }
}

export default App;
