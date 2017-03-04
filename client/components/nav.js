import React from 'react';

const NavBar = ({ buttonClicked }) => (
  <nav className="navbar navbar-default text-center">
    <button onClick={()=>buttonClicked()} className="btn btn-primary" >Teachers</button>
    <button onClick={()=>buttonClicked()} className="btn btn-default">Students</button>
    <button onClick={()=>buttonClicked()} className="btn btn-primary">Classes</button>
  </nav>
);


export default NavBar;