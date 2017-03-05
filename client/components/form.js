import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const userData = {};

class SubmissionForm extends Component {
  getUserData() {

  }

  render() {
    return(
      <form>
        <FormGroup>
          <FormControl componentClass="select" placeholder="select">
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
            value=""
          />
          Email:
          <FormControl  
            id="formControlEmail"
            type="text"
            label="Email"
            placeholder="Enter Email"
            value=""
          />

        </FormGroup>
      </form>
    )
  }
}

export default SubmissionForm;