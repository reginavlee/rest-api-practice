import React from 'react';

const Display = ({info}) => (
  <table>
    <tbody>
      {}
      <tr>
        <td>{info[0]}</td>
        <td>{info[1]}</td>        
      </tr>
    </tbody>
  </table>
);
// const Display = ({info}) => (
//   <table>
//     <tbody>
//       {info.length ? info.map((item) => {
//         <tr>
//           <td>{console.log(item)}</td>
//           <td>{item.email}</td>
//         </tr>
//       }) : "" }
//     </tbody>
//   </table>
// );


export default Display;