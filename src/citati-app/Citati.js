import React, { useState } from "react";

const Citati = (quotes) => {
  let citati = quotes.quotes;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(citati.length).fill(0));
  const [best, setBest] = useState(0);

  const addPoint = () => {
    const tmp = [...votes];
    tmp[selected]++;
    setVotes(tmp);
  };

  const checkMostVoted = () => {
    votes[selected] >= votes[best] ? setBest(selected) : setBest(best);
  };

  return (
    <div>
      <div style={{ borderBottom: "5px solid blue" }}>
        {citati.map((citat) => (
          <p key={citat}>{citat}</p>
        ))}
      </div>
      <p>{citati[selected]}</p>
      <p>{votes[selected]}</p>
      <button onClick={() => setSelected((selected + 1) % citati.length)}>
        Next
      </button>
      <button
        onClick={() => {
          addPoint();
          checkMostVoted();
        }}
      >
        Add Vote
      </button>
      <h2>Citat sa najvise glasova</h2>
      <p>{citati[best]}</p>
      <p>{votes[best]}</p>
    </div>
  );
};

export default Citati;
