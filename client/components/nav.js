import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import SubmissionForm from './form';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }

    // function binds
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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
            <SubmissionForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.postEntries("teachers", {name: 'mr.krabs', email: 'krusty@krabs.com'})} type="submit">Submit</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </nav>
    );
  }
}


export default NavBar;


// import React from 'react';
// import SubmitModal from './submit-modal';

// const NavBar = ({ getEntries }) => (
//   <nav className="navbar navbar-default text-center">
//     <button onClick={()=>getEntries("teachers")} className="btn btn-primary">Teachers</button>
//     <button onClick={()=>getEntries("students")} className="btn btn-default">Students</button>
//     <button onClick={()=>getEntries("classes")} className="btn btn-primary">Classes</button>
//     <button onClick={()=>{console.log("inside of submit modal")}} className="btn btn-secondary">Add Entries</button>
//   </nav>
// );


// export default NavBar;