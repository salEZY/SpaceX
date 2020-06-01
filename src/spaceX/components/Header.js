import React from "react";

const Header = ({ name, summary }) => {
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
      </h1>
    </div>
  );
};

export default Header;
