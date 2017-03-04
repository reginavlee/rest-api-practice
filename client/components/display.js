import React from 'react';

const Display = ({info}) => (
  <div>
    {console.log('info', info[0])}
    <table>
      <tbody>
        <tr>{info[0].name}</tr>
      </tbody>
    </table>
  </div>
);


export default Display;