import React from "react";

const Header = ({ name, founder, summary }) => {
  return (
    <div className="header">
      <h1>
        <a
          href="https://www.spacex.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name} <i className="fas fa-rocket"></i>
        </a>
        <span>
          {` ${founder}`}
          <i className="fas fa-user-tie" style={{ marginLeft: "10px" }}></i>
        </span>
      </h1>
      <p>{summary}</p>
    </div>
  );
};

export default Header;
