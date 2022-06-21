import React from "react";
import adnan8 from "./assets/adnan8.png"
import { Link, useParams } from "react-router-dom";
import "./common/About.css"

function CreatorCard( {creator, img} ) {
  // const imgURL = adnan8;
  const { id } = useParams()
  const selectedCreator = creator.id;
  return (
        // <div className="creatorCard">
    <li className="creatorCard" key={creator.id}>
        {/* <Link to={`${creator.id}`}> */}

          <img src={img} alt={creator.name} />
          <h4>{creator.name}</h4>
          <h4>{creator.status}</h4>
          <p>{creator.description}</p>
          <p>LinkedIn: {creator.linkedIn}</p>
        {/* </Link> */}
      {/* </div> */}
    </li>
  );
}

export default CreatorCard;
