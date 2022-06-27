import React from "react";
// import Creator from "../CreatorCard";
import adnan8 from "../assets/adnan8.png";
import jede8 from "../assets/jede8.png";
import john8 from "../assets/john8.png";
import { Link } from "react-router-dom";
import CreatorCard from "../CreatorCard";
import "./About.css";


function About() {
const imgURL = adnan8;
const imgURL2 = jede8;
const imgURL3 = john8;
const creators = [
  {
    name: "Adnan",
    id: 1,
    img: imgURL,
    status: "Pursuit Fellow",
    description: "Coding, computer software & hardware!",
    linkedIn: "https://www.linkedin.com/in/adnan-abubakar-adams/",
    brief: ""
  },
  {
    name: "Jede",
    id: 2,
    img: imgURL2,
    status: "Pursuit Fellow",
    description: "Artist, Tango dancer, DJ, software engineer!",
    linkedIn: "https://www.linkedin.com/in/jedeb/",
    brief: ""
  },
  {
    name: "John",
    id: 3,
    img: imgURL3,
    status: "Pursuit Fellow",
    description: "Coder, avid cycler, and photographer!",
    linkedIn: "https://www.linkedin.com/in/johnprado/",
    brief: ""
  },
]

  return (
    <div className="about">
      <div className="us">
        <h3>Us - the Creators</h3>
        <h4>AJJ - Adnan-Jede-John</h4>
        <p>
          This project was not easy. Although we do not see all out details, we
          are the best collaborative team EVER! 🧚‍♀️ 🧚‍♀️ 🧚‍♀️ 🧚‍♀️ 🧚‍♀️ 🧚‍♀️
        </p>
      </div>
        <ul className="creators">
          {creators.map((creator) => {
            return (
              <li key = { creator.id }>
              <CreatorCard
                img={creator.img}
                creator={creator.name}
              />
              </li>
            );
          })}
        </ul>
  
    </div>
  );
}

export default About;
