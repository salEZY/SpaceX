import React from "react";
import ReactDOM from "react-dom";
import SpaceX from "./spaceX/SpaceX";

const App = () => {
  return (
    <div>
      <SpaceX />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
