import React from "react";

const Launch = ({ name, year, image, link }) => {
  return (
    <div className="launch-div">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={`Pic of ${name}`}
          style={{ width: "100px", height: "100px" }}
        />
      </a>
      <h3>{name}</h3>
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        Year of launch: {year}
      </p>
    </div>
  );
};

export default Launch;
