import React from 'react';

const Display = ({resultData}) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {resultData.map((entry, i)=> (
        <tr key={i}>
          <td>{entry._id}</td>
          <td>{entry.name}</td>
          <td>{entry.email}</td>    
        </tr>
      ))}
    </tbody>
  </table>
);


export default Display;
