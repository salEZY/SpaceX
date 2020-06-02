import React from "react";
import Info from "./Info";

const Search = ({
  onSelectChange,
  onYearChange,
  value,
  launches,
  yearValue,
}) => {
  let years = [];
  launches.map((launch) => years.push(launch.launch_year));
  years = years.filter((year, index) => {
    return years.indexOf(year) === index;
  });

  return (
    <div id="info-container">
      <div className="inputs">
        <label>Select past or upcoming launches</label>
        <div className="pastFuture-container">
          <div className="inputs-div">
            <select name="" onChange={onSelectChange} defaultValue={value}>
              <option value="none">All</option>
              <option value="past">Past</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
        <label>Select launches by year</label>
        <div className="pastFuture-container">
          <div className="inputs-div second">
            <select name="" onChange={onYearChange} defaultValue={yearValue}>
              <option value="none">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Search;
