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
    this.postEntries = this.postEntries.bind(this);
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

  postEntries (endpoint, data) {
    const basePath = "http://localhost:8080/api/" 
    axios
      .post(basePath + endpoint, data)    
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(response);
      })
  }

  render() {
    return(
      <div>
        <NavBar getEntries={this.getEntries} postEntries={this.postEntries}/>
        <Display resultData={this.state.resultsData} />
      </div>
    );
  }
}

render((<App />), document.getElementById('app'));
