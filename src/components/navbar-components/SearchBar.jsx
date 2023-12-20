import React from "react";

function SearchBar() {
  return (
    <div className="">
      <input
        placeholder="Search....."
        className="p-2 w-[500px] h-[50px] rounded-lg z-50 fixed right-[150px] shadow-[0px_0px_10px_2px_rgb(92,92,92)]"
      />
    </div>
  );
}

export default SearchBar;
