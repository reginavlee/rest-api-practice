import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import NavBar from './components/nav';
import Display from './components/display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsData: []
    }
    this.getEntries = this.getEntries.bind(this);
  }

  getEntries (endpoint) {
    const basePath = "http://localhost:8080/api/" 
    axios
      .get(basePath + endpoint)
      .then((results) => {
        this.setState({
          resultsData: results.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return(
      <div>
        <NavBar getEntries={this.getEntries} />
        <Display resultData={this.state.resultsData} />
      </div>
    );
  }
}

render((<App />), document.getElementById('app'));