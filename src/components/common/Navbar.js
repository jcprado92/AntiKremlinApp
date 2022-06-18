import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Search from "../Search";

function Navbar({ setSearch, setMaxResult }) {
 
// this is super frustrating
  return (
    <header>
      <nav className="navBar"> 
      {/* // div className= navBar__left */}
        <h2>
          <Link to="/">TeleApp</Link>
        </h2>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/about">About</Link>
        </h2>
      </nav>

      <aside>
        <Search setSearch= {setSearch} setMaxResult={setMaxResult}/>
      </aside>
    </header>
  );
}
//trying to merge 

export default Navbar;
// here we go!!