import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./common/Navbar.css";

function Search({ setSearch, setMaxResult }) {
  const [inputSearch, setInputSearch] = useState("");
  const [inputMaxResult, setInputMaxResult] = useState(8);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearch(inputSearch);
    // setMaxResult(inputMaxResult);
    setInputMaxResult(8);
    setInputSearch("");
    navigate(`/videos/${inputSearch}/${inputMaxResult}`);

  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        className="search__input"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search Videos"
        />
        <select className="search__select" onChange={(e) => setInputMaxResult(e.target.value)}>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
        </select>
        <button className="search__button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
