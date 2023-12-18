import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        placeholder="Search....."
        className="p-2 w-[500px] h-[50px] rounded-lg absolute right-[150px] shadow-[0px_0px_10px_2px_rgb(92,92,92)]"
      />
    </div>
  );
}

export default SearchBar;
