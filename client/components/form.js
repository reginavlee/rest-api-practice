import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class SubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      value: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })    
  }

  handleEmailSubmit(event) {
    this.setState({ email: event.target.value })
  }

  handleSelectChange(event) {
    console.log('event', event);
    this.setState({ value: event.target.value })
  }

  render() {
    return(
      <form onKeyUp={() => this.props.getUserData(this.state)}>  
        <FormGroup>
          <FormControl componentClass="select" placeholder="select" value={this.state.value} onChange={this.handleSelectChange}>
            <option value="teachers">Teacher</option>
            <option value="students">Student</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          Name:
          <FormControl  
            id="formControlName"
            type="text"
            label="Name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          Email:
          <FormControl  
            id="formControlEmail"
            type="text"
            label="Email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleEmailSubmit}            
          />
        </FormGroup>
      </form>
    )
  }
}

export default SubmissionForm;
