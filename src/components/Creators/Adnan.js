import React from 'react';
import adnan from "./assets/adnan.jpeg";

function Adnan() {
  const imageURL = adnan;
  return (
    <div className='images'>
      <img src={imageURL} alt="adnan"/>

    </div>
  )
}

export default Adnan