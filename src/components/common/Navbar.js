import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";

function Navbar() {
  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
  };
// this is super frustrating
  return (
    <header>
      <article>
        <h2>
          <Link to="/">TeleApp</Link>
        </h2>
        <h2>
        
          <Link to="/">Home</Link>
        </h2>
        <h2>
      
          <Link to="/About">About</Link>
        </h2>

        <aside>
          <button onClick={handleClick} type="submit" value="">
            Search
          </button>
          <input type="text"></input>
        </aside>
      </article>
    </header>
  );
}

export default Navbar;
