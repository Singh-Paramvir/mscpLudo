import axios from "axios";
import React, { useState, useRef } from "react";

const SearchPage = () => {
  const searchRef = useRef();
  const [suggestions, setSuggestions] = useState([]);

  async function handleSearchInput(event) {
    const query = event.target.value.trim();
    if (query.length === 0) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.post("https://node.airaielectric.com/api/v1/auth/addFeedback", { input: query });
      setSuggestions(response.data.data);
    } catch (error) {
      console.error("Error fetching autocomplete suggestions:", error);
    }
  }

  const handleSuggestionClick = (description) => {
    searchRef.current.value = description;
    setSuggestions([]);
  };

  return (
    <div className="container">
      <h1>Autocomplete</h1>
      <div className="search-container">
        <input
          type="text"
          ref={searchRef}
          id="search-box"
          placeholder="Search for places..."
          onChange={handleSearchInput}
        />
        <div className="dropdown">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSuggestionClick(suggestion.description)}
            >
              {suggestion.description}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 600px;
          margin: 50px auto;
          text-align: center;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .search-container {
          width: 100%;
          position: relative;
        }

        #search-box {
          width: 100%;
          padding: 10px;
          font-size: 16px;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          border: 1px solid #ccc;
          border-top: none;
          background: #fff;
          z-index: 1000;
          max-height: 200px;
          overflow-y: auto;
        }

        .dropdown-item {
          padding: 10px;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default SearchPage;
