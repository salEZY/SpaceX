import React from "react";

const Launch = ({ name, year, image, link }) => {
  return (
    <div className="launch-div">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt="launch pic"
          style={{ width: "100px", height: "100px" }}
        />
      </a>
      <h3>{name}</h3>
      <p>Year of launch: {year}</p>
    </div>
  );
};

export default Launch;