import React from "react";

import Adnan from "../Creators/Adnan";
import David from "../Creators/David";
import Jede from "../Creators/Jede";
import John from "../Creators/John";
import { Link, Routes, Route } from "react-router-dom"

function About() {
  return (
  <>
  {/* <Routes> */}
  <div>About</div>
  {/* <Route path="/adnan" element={<Adnan/>}/> */}
  <h3>ADJJ- Adnan-David-Jede-John</h3>
  <p>Working on this project was not easy. It started off with us creating a blueprint of what we wanted our page to look like. Once mapped out, we did our best to come up with a plan on how we would tackle it. Although we could picture it in our minds, we did not know where to start. Git was also a problem !! Who knew Git would throw so many curveballs at us! Once we kind of figured out Git, there a sigh of releif from the whole team. </p>
  <p>
    <Link to ="/adnan">
    <img src="./creators/assets/adnan.jpeg" alt="Adnan"/>
    </Link> 
  </p>
  <p>
  <Link to ="/Creators/David">
    <img src="image of David" alt="David"/>
    </Link> 
  </p>
  <p>
  <Link to ="/Creators/Jede">
    <img src="image of Jede" alt="Jede"/>
    </Link> 
  </p>
  <p>
  <Link to ="/Creators/John">
    <img src="image of John" alt="John"/>
    </Link> 
  </p>
  {/* </Routes> */}
  </>
  )
}

export default About;
