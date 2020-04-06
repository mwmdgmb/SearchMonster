import React from "react";
import "./searchBox.css";

function SearchBox({ placeholder, onSearchChange }) {
  return (
    <div>
      <input
        className="searchBox"
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
