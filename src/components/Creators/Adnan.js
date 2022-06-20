import React from 'react';
import adnan from "./assets/adnan.jpeg";

function Adnan() {
  const imageURL = adnan;
  return (
    <div className='images'>
      <img style={{width:"120px", height:"120px"}} src={imageURL} alt="adnan"/>

    </div>
  )
}

export default Adnan