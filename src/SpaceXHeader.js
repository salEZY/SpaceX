import React from "react";

const SpaceXHeader = ({ name, founder, founded, summary }) => {
  return (
    <div className="header">
      <h1>
        {name} - {founder} - {founded}
      </h1>
      <p>{summary}</p>
    </div>
  );
};

export default SpaceXHeader;
