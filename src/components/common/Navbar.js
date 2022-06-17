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

  return (
    <header>
      <nav className="mainnav">
        <h2>
          <Link to="/">TeleApp</Link>
        </h2>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/About">About</Link>
        </h2>
      </nav>

      <aside>
        <input type="text" placeholder="Search Videos"></input>
        <button onClick={handleClick} type="submit" value="">
          Search
        </button>
      </aside>
    </header>
  );
}

export default Navbar;
