import React, { useState } from "react";
import "./css/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import JobCardListJson from "./json/JobCardList.json";
import { useNavigate } from "react-router-dom";

function SearchBar({ searchOpens, setSearchOpens }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onKeyPress = (e) => {
    e.preventDefault();
    if (!searchTerm) alert("검색어를 입력해주세요!!");
    else {
      navigate(`/search?term=${searchTerm}`);
    }
  };

  return (
    <>
      {searchOpens && (
        <div id="searchBar">
          <div className="searchWrapper">
            <div className="searchFormSection">
              <div className="searchFormContainer">
                <form role="presentation" onSubmit={onKeyPress}>
                  <input
                    type="search"
                    placeholder="#태그, 회사, 포지션 검색"
                    autocomplete="off"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
            </div>
            <div className="searchResultSection">
              <div className="searchResultContainer">
                <h4>추천태그로 검색해보세요</h4>
                <a>기업태그 홈 이동하기 &gt;</a>
              </div>
              <div className="searchResultContainer">
                <div className="searchResultTagList">
                  <button>#연봉상위2~5%</button>
                  <button>#퇴사율5%이하</button>
                  <button>#컨퍼런스참가비</button>
                  <button>#상여금</button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="searchBarBg"
            onClick={() => setSearchOpens(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default SearchBar;
