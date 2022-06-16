import React from 'react';
import john from './assets/john.jpeg';

function John() {
  const imageURL = john;
  return (
    <div className='images'>
      <img src={imageURL} alt="john"/>

    </div>
  )
}

export default John;