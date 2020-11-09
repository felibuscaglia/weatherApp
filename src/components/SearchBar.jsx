import React, { useState } from "react";
import './searchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  const changeValue = (e) => {
    setCity (e.target.value);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity ('');
    }}>
      <input
        id="searchBar"
        type="text"
        placeholder="City"
        value={city}
        onChange={changeValue}
      />
      <input type="submit" value="Search" id="searchButton"/>
    </form>
  );
}
