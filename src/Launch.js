import React from "react";

const Launch = ({ name, year, image }) => {
  return (
    <div className="launch-div">
      <img
        src={image}
        alt="launch pic"
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{name}</h3>
      <p>Year of launch: {year}</p>
    </div>
  );
};

export default Launch;
