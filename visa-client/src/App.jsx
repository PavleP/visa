import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Vehicles from './components/Vehicles';
import Exams from './components/Exams';
import Practice from './components/Practice';
import Contact from './components/Contact';
import Users from './components/Users';
import Settings from './components/Settings';
import Login from './components/Login';
import Navbar from './components/CustomNavbar';
import Logo from './components/Logo';
import InitLocale from './components/InitLocale';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <InitLocale/>
          <Logo/>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/p_categories" component={Categories} />
          <Route path="/p_vehicles" component={Vehicles} />
          <Route path="/p_exams" component={Exams} />
          <Route path="/p_practice" component={Practice} />
          <Route path="/p_contact" component={Contact} />
          <Route path="/users" component={Users} />
          <Route path="/s" component={Settings} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
