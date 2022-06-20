import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Search from "../Search";
import "./Navbar.css";

function Navbar({ setSearch, setMaxResult }) {
  return (
    
    <header>
      <nav className="navBar">
        <div className="navBar__left">
          <h5>
            <Link to="/">TeleApp</Link>
            </h5>
            <h5>
            <Link to="/">Home</Link>
            </h5>
            <h5>
            <Link to="/about">About</Link>
          </h5>
        </div>
        <div className="navBar__search">
          <Search setSearch={setSearch} setMaxResult={setMaxResult} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
