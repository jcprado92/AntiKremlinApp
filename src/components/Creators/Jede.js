import React from 'react';
import jede from "./assets/jede.jpeg";

function Jede() {
  const imageURL = jede;
  return (
    <div className='images'>
      <img src={imageURL} alt="jede"/>

    </div>
  )
}

export default Jede