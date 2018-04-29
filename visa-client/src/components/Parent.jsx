import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Exams from './Exams';
import Settings from './Settings';
import Categories from './Categories';
import Home from './Home';
import Vehicles from './Vehicles';
import Login from './Login';
import Contact from './Contact';
import Users from './Users';
import Practice from './Practice';
import Navbar from './CustomNavbar';
import Logo from './Logo';


class Parent extends Component {
  render() {
    if (this.props.initDone) {
      return (
          <Router>
            <div>
              <Logo/>
              <Navbar/>
              <Route exact path="/" component={Home}/>
              <Route path="/p_categories" component={Categories}/>
              <Route path="/p_vehicles" component={Vehicles}/>
              <Route path="/p_exams" component={Exams}/>
              <Route path="/p_practice" component={Practice}/>
              <Route path="/p_contact" component={Contact}/>
              <Route path="/users" component={Users}/>
              <Route path="/s" component={Settings}/>
              <Route path="/login" component={Login}/>
            </div>
          </Router>
      );
    } else {
      return <div />
    }
  }
}

export default Parent;
