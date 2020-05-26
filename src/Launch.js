import React from "react";

export const Launch = ({ name, year, image }) => {
  return (
    <>
      <img
        src={image}
        alt="launch pic"
        style={{ width: "100px", height: "100px" }}
      />
      <p>Mission name: {name}</p>
      <p>Year of launch: {year}</p>
    </>
  );
};
