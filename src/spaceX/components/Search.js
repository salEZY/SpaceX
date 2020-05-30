import React from "react";

const Search = ({ onSelectChange, value }) => {
  return (
    <div>
      <label htmlFor="launches">Select past/future launches: </label>
      <select
        name=""
        id="launches"
        onChange={onSelectChange}
        defaultValue={value}
      >
        <option value="none">All</option>
        <option value="past">Past</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default Search;
