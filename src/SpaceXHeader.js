import React from "react";

const SpaceXHeader = ({ name, founder, founded, summary }) => {
  return (
    <>
      <h1>
        {name} - {founder} - {founded}
      </h1>
      <p>{summary}</p>
    </>
  );
};

export default SpaceXHeader;
