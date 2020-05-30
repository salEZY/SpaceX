import React, { useState, useEffect } from "react";
import axios from "axios";
import Launch from "./components/Launch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import ToTopButton from "./components/ToTopButton";
import Search from "./components/Search";

import "./SpaceX.css";

const COMPANY_INFO = "https://api.spacexdata.com/v3/info";
const ALL_LAUNCHES = "https://api.spacexdata.com/v3/launches";
const PAST_LAUNCHES = "https://api.spacexdata.com/v3/launches/past";
const UPCOMING_LAUNCHES = "https://api.spacexdata.com/v3/launches/upcoming";
const summary =
  "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.";

const SpaceX = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(COMPANY_INFO).then((res) => setInfo(res.data));
  });

  useEffect(() => {
    setLoading(true);
    if (select === "past") {
      axios.get(PAST_LAUNCHES).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } else if (select === "upcoming") {
      axios.get(UPCOMING_LAUNCHES).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    } else {
      axios.get(ALL_LAUNCHES).then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, [select]);

  const HandleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="main">
      <ToTopButton />
      <Header
        name={info.name ? info.name : "SpaceX"}
        founder={info.founder ? info.founder : "Elon Musk"}
        summary={info.summary ? info.summary : summary}
      />
      <Search onSelectChange={HandleSelectChange} value={select} />
      <div className="launches-list">
        {loading ? (
          <Spinner />
        ) : (
          data.map((launch) => (
            <Launch
              key={launch.flight_number}
              name={launch.mission_name}
              year={launch.launch_year}
              image={launch.links.mission_patch_small}
              link={launch.links.article_link}
            />
          ))
        )}
      </div>
      <Footer
        founder={info.founder ? info.founder : "Elon Musk"}
        founded={info.founded ? info.founded : 2002}
        employees={info.employees ? info.employees : 7000}
        address={info.headquarters ? info.headquarters.address : "Rocket Road"}
        city={info.headquarters ? info.headquarters.city : "Hawthorne"}
        state={info.headquarters ? info.headquarters.state : "California"}
      />
    </div>
  );
};

export default SpaceX;
