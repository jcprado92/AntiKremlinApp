import React from "react";
// import Creator from "../CreatorCard";
import adnan8 from "../assets/adnan8.png";
import jede8 from "../assets/jede8.png";
import john8 from "../assets/john8.png";
// import Adnan from "../Creators/Adnan";
// import Jede from "../Creators/Jede";
// import John from "../Creators/John";
// import { Link } from "react-router-dom";
import CreatorCard from "../CreatorCard";
import "./About.css"

const imgURL = adnan8;
const imgURL2 = jede8;
const imgURL3 = john8;
const creators = [
  {
    name: "Adnan",
    id: 1,
    img: imgURL,
    status: "Pursuit Fellow",
    description: "Loves Ronaldo",
    linkedIn: "",
  },
  {
    name: "Jede",
    id: 2,
    img: imgURL2,
    status: "Pursuit Fellow",
    description: "",
    linkedIn: "",
  },
  {
    name: "John",
    id: 3,
    img: imgURL3,
    status: "Pursuit Fellow",
    description: "",
    linkedIn: "",
  },
];
function About() {
  return (
    <div className="about">
      <div className="us">
        <p>Us - the Creators</p>
        <p>AJJ - Adnan-Jede-John</p>
      </div>
      <p>
        This project was not easy. Although we do not see all out details, we
        are the best collaborative team EVER! 🧚‍♀️ 🧚‍♀️ 🧚‍♀️ 🧚‍♀️ 🧚‍♀️ 🧚‍♀️
      </p>
      <article className="creators">
        <ul>
          {creators.map((creator) => {
            return (
              <CreatorCard
                img={creator.img}
                creator={creator}
                key={creator.id}
              />
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export default About;
