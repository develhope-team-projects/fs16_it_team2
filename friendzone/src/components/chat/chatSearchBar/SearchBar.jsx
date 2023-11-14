import React from "react";

const SearchBar = ({ searchWord, handleSearchWordInputChange }) => (
  <div className="w-full ml-20">
    <input
      type="text"
      value={searchWord}
      onChange={handleSearchWordInputChange}
      placeholder="Search in messages..."
      className="w-full p-2 text-black rounded"
    />
  </div>
);

export default SearchBar;
