import React from "react";

import Stat from "./Stat";

const Stats = ({ positive, negative, neutral }) => {
  const votes = positive + neutral + negative;
  let percentPositive = (positive / (positive + neutral + negative)) * 100;
  percentPositive = percentPositive.toFixed(2) + "%";
  return (
    <>
      {!votes ? (
        <h1>Nema nijedne ocene</h1>
      ) : (
        <>
          <Stat text="Positive" number={positive} />
          <Stat text="Neutral" number={neutral} />
          <Stat text="Negative" number={negative} />
          <Stat text="Ukupan broj glasova" number={votes} />
          <Stat text="Procenat pozitivnih glasova" number={percentPositive} />
        </>
      )}
    </>
  );
};

export default Stats;
