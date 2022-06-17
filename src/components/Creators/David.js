
import React from 'react'
import david from "./assets/david.jpg";

function David() {

    const imageURL = david;
    return (
      <div className='images'>
        <img src={imageURL} alt="david"/>
  
      </div>
  )
}


export default David