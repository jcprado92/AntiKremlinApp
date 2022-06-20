import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ setSearch, setMaxResult }) {
  const [inputSearch, setInputSearch] = useState("Pursuit");
  const [inputMaxResult, setInputMaxResult] = useState(8);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputSearch);
    setMaxResult(inputMaxResult);
    // setInputMaxResult(8);
    setInputSearch("");
    navigate("/videos");
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search Videos"
        />
        <select onChange={(e) => setInputMaxResult(e.target.value)}>
          <option selected value={8}>
            8
          </option>
          <option value={16}>16</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
