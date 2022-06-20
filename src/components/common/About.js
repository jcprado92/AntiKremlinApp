import React from "react";
import Creator from "../Creator";
// import adnan8 from "assets/adnan8.png"
// import jede8 from "./assets/adnan8.png"
// import john8 from "./assets/adnan8.png"
// import Adnan from "../Creators/Adnan";
// import Jede from "../Creators/Jede";
// import John from "../Creators/John";
import { Link } from "react-router-dom";

const creators = [
  {
  name: "Adnan",
  id: 1,
  // img: adnan8,
  status: "Pursuit Fellow"
}, {
  name: "Jede",
  id: 2,
  // img: jede8,
  status: "Pursuit Fellow"
}, {
  name: "John",
  id: 3,
  // img: john8,
  status: "Pursuit Fellow"
}
 ]
function About(creators, name) {
  return (
<div>
  <div>Us - the Creators</div>
  <p>AJJ- Adnan-Jede-John</p>
  <article className="creators">
                <ul>
                    {
                        creators.map(creator => {
                            return (
                               <Creator creator={creator}/>
                            )
                        })
                    }
                </ul>


            </article>
  
  </div>
  )
}

export default About;
