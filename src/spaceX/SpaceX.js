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

const SpaceX = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [select, setSelect] = useState("");
  const [year, setYear] = useState("none");
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

  const HandleYearSelectChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="main">
      <ToTopButton />
      <Header name={info.name ? info.name : "SpaceX"} />
      <Search
        onSelectChange={HandleSelectChange}
        onYearChange={HandleYearSelectChange}
        value={select}
        yearValue={year}
        launches={data}
      />
      <div className="launches-list">
        {loading ? (
          <Spinner />
        ) : year !== "none" ? (
          data
            .filter((launch) => year === launch.launch_year)
            .map((launch) => (
              <Launch
                key={launch.flight_number}
                name={launch.mission_name}
                year={launch.launch_year}
                image={launch.links.mission_patch_small}
                link={launch.links.article_link}
              />
            ))
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
