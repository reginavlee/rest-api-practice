import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>Hi</div>
    );
  }
}

render((<App />), document.getElementById('app'));