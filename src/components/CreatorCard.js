import React from "react";
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
          <h3>{creator.name}</h3>
          <h4>{creator.status}</h4>
          <p>{creator.brief}</p>
          <p>{creator.description}</p>
          <a href="https://www.linkedin.com/in/adnan-abubakar-adams/">LinkedIn</a>

        {/* </Link> */}
      {/* </div> */}
    </li>
  );
}

export default CreatorCard;
