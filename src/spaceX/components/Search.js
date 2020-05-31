import React from "react";
import Rocket from "./Rocket";

const Search = ({ onSelectChange, value }) => {
  return (
    <div id="inputs">
      <>
        <label>Select past/upcoming launches</label>
        <div className="pastFuture-container">
          <div className="inputs-div">
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
        </div>
        <label>Select launches by year</label>
        <div className="pastFuture-container">
          <div className="inputs-div">
            <select
              name=""
              id="launches"
              onChange={onSelectChange}
              defaultValue={value}
            >
              <option value="none">Every Year</option>
              <option value="past">Past</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </>
      <Rocket />
    </div>
  );
};

export default Search;
