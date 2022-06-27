import React from "react";
import { Link } from "react-router-dom";
// import About from "./About";

import homeIcon from "../assets/homeIcon.png"

import Search from "../Search";
import "./Navbar.css";

function Navbar({ setSearch, setMaxResult }) {
  return (
    
    <header>
      <nav className="navBar">
        <div className="navBar__left">
          <h5>
            <Link to="/"><img src={homeIcon} className="logo" alt="AJJTube" /></Link>
            </h5>
            <h5>
            <Link to="/"><img src=".../homeIcon.png" alt="AJJTube" /></Link>
            </h5>
            <h5>
            <Link to="/about"><img src=".../aboutIcon.png" alt="Creators" /></Link>
          </h5>
        </div>
        <div className="navBar__search">
          <input type="text" />
          <Search setSearch={setSearch} setMaxResult={setMaxResult} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
