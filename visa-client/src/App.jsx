import React, {Component} from 'react';
import './App.css';
import Logo from './components/Logo';
import InitLocale from './components/InitLocale';
import Navv from './components/Navv';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }

  state = { initDone: false };

  handler() {
    this.setState({ initDone: true });
  }

  render() {
    return (
        <Router>
          <div>
            <InitLocale handler={this.handler}/>
            <Logo/>
            <Navv initDone={this.state.initDone}/>
          </div>
        </Router>
    );
  }
}

export default App;
