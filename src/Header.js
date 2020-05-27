import React from "react";

const Header = ({ name, founder, summary }) => {
  return (
    <div className="header">
      <h1>
        {name} - {founder}
      </h1>
      <p>{summary}</p>
    </div>
  );
};

export default Header;
