import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import NavBar from './components/nav';
import Display from './components/display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      data: []
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked (type) {
    const basePath = "http://localhost:8080/api/" 
    axios
      .get(basePath + type)
      .then((results) => {
        this.setState({
          click: true,
          data: results.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return(
      <div>
        <NavBar buttonClicked={this.buttonClicked}/>
        <Display info={this.state.data}/>
      </div>
    );
  }
}

render((<App />), document.getElementById('app'));
