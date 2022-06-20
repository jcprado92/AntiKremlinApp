import React from 'react';
import john8 from './assets/john8.png';

function John() {
  const imageURL = john8;
  return (
    <div className='images'>
      <img src={imageURL} alt="john"/>

    </div>
  )
}

export default John;