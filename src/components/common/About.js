import React from "react";
import Adnan from "../Creators/Adnan";
import David from "../Creators/David";
import Jede from "../Creators/Jede";
import John from "../Creators/John";
import { Link } from "react-router-dom"

function About() {
  return (<>
  <div>About</div>
  <p>ADJJ- Adnan-David-Jede-John</p>
  <p>
    <Link to ="/Creators/Adnan">
    <img src="image of Adnan" alt="Adnan"/>
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
  
  </>)
}

export default About;
