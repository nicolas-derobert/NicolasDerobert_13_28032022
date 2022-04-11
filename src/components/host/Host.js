import React from 'react';
import "./Host.css"

function Host(props) {
  return <div className='host'>
      <h2>{props.name}</h2>
      <img src={props.picture} alt={props.name} />
  </div>;
}

export default Host;
