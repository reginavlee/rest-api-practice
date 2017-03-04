import React from 'react';

const NavBar = ({ buttonClicked }) => (
  <nav className="navbar navbar-default text-center">
    <button onClick={()=>buttonClicked("teachers")} className="btn btn-primary">Teachers</button>
    <button onClick={()=>buttonClicked("students")} className="btn btn-default">Students</button>
    <button onClick={()=>buttonClicked("classes")} className="btn btn-primary">Classes</button>
  </nav>
);


export default NavBar;