import React from "react";

const Header = ({ name, founder, summary }) => {
  return (
    <div className="header">
      <h1>
        {name}
        <i className="fas fa-rocket" style={{ marginLeft: "5px" }}></i> -{" "}
        {founder}
        <i className="fas fa-user-astronaut" style={{ marginLeft: "10px" }}></i>
      </h1>
      <p>{summary}</p>
    </div>
  );
};

export default Header;
