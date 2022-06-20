import React from "react";
import { Link } from "react-router-dom";

function Creator( {creator} ) {
  return (
    <div>
      <li key={creator.id}>
        <Link to={`${creator.id}`}>
          <h4>{creator.name}</h4>
          <h4>{creator.status}</h4>

          {/* <img src={creator.img} alt={creator.name} /> */}
        </Link>
      </li>
    </div>
  );
}

export default Creator;
