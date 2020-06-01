import React from "react";

const summary =
  "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.";

const Info = () => {
  return (
    <div className="img-container">
      <p>{summary}</p>
      <img src={require("../img/rocket.jpg")} alt="SpaceX launch" />
    </div>
  );
};

export default Info;
