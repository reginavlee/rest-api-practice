import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

import SubmissionForm from './form';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      userData: {}
    }

    // function binds
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.postEntries = this.postEntries.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  getUserData(incomingData) {
    this.setState({ userData: incomingData });
  }

  postEntries (endpoint, data) {
    const basePath = "http://localhost:8080/api/" 
    axios
      .post(basePath+endpoint, data)    
      .then((response) => {
        console.log('successful response in post entries', response);
      })
      .catch((err) => {
        console.log('error in post entries', response);
      })
  }

  render() {
    return (
      <nav className="navbar navbar-default text-center">
        <button onClick={() => this.props.getEntries("teachers")} className="btn btn-primary">Teachers</button>
        <button onClick={() => this.props.getEntries("students")} className="btn btn-primary">Students</button>
        <button onClick={() => this.props.getEntries("classes")} className="btn btn-primary">Classes</button>
        <Button onClick={this.open} className="btn btn-secondary">Add Entries</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Entries</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SubmissionForm getUserData={this.getUserData} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=> this.postEntries(this.state.userData.value, {"name": this.state.userData.name, "email": this.state.userData.email})} type="submit">Submit</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </nav>
    );
  }
}


export default NavBar;
