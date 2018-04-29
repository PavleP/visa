import React, {Component} from 'react';
import './App.css';
import InitLocale from './components/InitLocale';
import Parent from './components/Parent';
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
            <Parent initDone={this.state.initDone}/>
          </div>
        </Router>
    );
  }
}

export default App;
