import React from "react";
import "./common/About.css"

function CreatorCard( {props} ) {
const {id, name, status, brief, description, linkedIn} = props;
 
  const selectedCreator = creator.id;
  return (
       
    <div className="creatorCard" key={creator.id}>
  
          <img src={creator.img} alt={creator.name} />
          <h3>{creator.name}</h3>
          <h4>{creator.status}</h4>
          <p>{creator.brief}</p>
          <p>{creator.description}</p>
          <p>{creator.linkedIn}</p>

    </div>
  );
}

export default CreatorCard;
