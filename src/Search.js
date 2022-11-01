import React from "react";
import "./css/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({}) {
  return (
    <>
      <div className="searchBar">
        <div className="searchBarContainer">
          <input />
        </div>
      </div>
      <div className="modalBg"></div>
    </>
  );
}

export default Search;
