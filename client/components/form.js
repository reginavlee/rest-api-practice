import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const SubmissionForm = () => (
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
      />
      Email:
      <FormControl  
        id="formControlEmail"
        type="text"
        label="Email"
        placeholder="Enter Email"
      />

    </FormGroup>
  </form>
);

export default SubmissionForm;


// import React, { Component } from 'react';
// import { FieldGroup } from 'react-bootstrap';

// const SubmissionForm = () => (
//   <form>
//     <FieldGroup
//       id="formControlName"
//       type="text"
//       label="Name"
//       placeholder="Enter Name"
//     />
//   </form>
// );

// export default SubmissionForm;