import React from 'react';
import './Unit.css';

function Unit (props) {
return (
  <>
  <tbody>
      <tr>
       <td className="unit-td">{props.unit.id}</td>
       <td className="unit-td">{props.unit.name}</td>
       <td className="unit-td">{props.unit.age}</td>
   </tr>
   </tbody>
</>
)}

export default Unit;
