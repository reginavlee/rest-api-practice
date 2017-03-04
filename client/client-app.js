import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import NavBar from './components/nav';
import Display from './components/display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: [],
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked () {
    console.log("i'm clicked!");
    axios
      .get("http://localhost:8080/api/teachers")
      .then((results) => {
        this.setState({
          click: results.data
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
        <Display info={this.state.click}/>
        <h2>testing</h2>
      </div>
    );
  }
}

render((<App />), document.getElementById('app'));
