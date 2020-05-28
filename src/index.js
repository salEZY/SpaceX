import React from "react";
import ReactDOM from "react-dom";
// import Stats from "./stats-app/Stats";
// import Citati from "./citati-app/Citati";
import SpaceX from "./spaceX/SpaceX";

// const citati = [
//   "Човек који не воли није способан да осети величину туђе љубави, ни снагу љубоморе, ни опасност која се у њој крије",
//   "Чудно је како је мало потребно да будемо срећни, и још чудније: како нам често баш то мало недостаје!",
//   "Што не боли – то није живот, што не пролази – то није срећа",
//   "Звезданог неба и људског срца никад се човек неће моћи нагледати",
//   "Љубав је ваљда једина ствар на свијету који не треба објашњавати, ни тражити јој разлог",
//   "Ожени се у сваком случају. Ако добијеш добру жену, бићеш срећан.Ако добијеш лошу, постаћеш филозоф.Жене нас инспиришу на велика дела, а спречавају нас да их учинимо",
//   "Добро вино и лепа жена - то су два најлепша отрова",
// ];

const App = () => {
  // Чувамо стање за сваки клик посебно
  // Почетно стање за све оцене је 0
  // const [positive, setPositive] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [negative, setNegative] = useState(0);

  return (
    <div>
      {/* <h1>Dodaj ocenu</h1>
      <button onClick={() => setPositive(positive + 1)}>Positive</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setNegative(negative + 1)}>Negative</button>
      <Stats positive={positive} negative={negative} neutral={neutral} />
      <Citati quotes={citati} /> */}
      <SpaceX />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
