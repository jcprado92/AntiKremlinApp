import React from 'react';
import jede8 from "./assets/jede8.png";

function Jede() {
  const imageURL = jede8;
  return (
    <div className='images'>
      <img src={imageURL} alt="jede"/>

    </div>
  )
}

export default Jede