import React, { useState, useEffect } from "react";
import axios from "axios";
import Launch from "./components/Launch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import ToTopButton from "./components/ToTopButton";

import "./SpaceX.css";

const COMPANY_INFO = "https://api.spacexdata.com/v3/info";
const LAUNCHES_URL = "https://api.spacexdata.com/v3/launches";
let isLoading = true;

const SpaceX = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(LAUNCHES_URL);
      setData(result.data);
      const teslaInfo = await axios.get(COMPANY_INFO);
      setInfo(teslaInfo.data);
    };
    fetchData();
    isLoading = false;
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div style={{ textAlign: "center" }}>
      <ToTopButton />
      <Header name={info.name} founder={info.founder} summary={info.summary} />
      <div className="launches-list">
        {data.map((launch) => (
          <Launch
            key={launch.flight_number}
            name={launch.mission_name}
            year={launch.launch_year}
            image={launch.links.mission_patch_small}
            link={launch.links.article_link}
          />
        ))}
      </div>
      <Footer
        founder={info.founder}
        founded={info.founded}
        employees={info.employees}
        address={info.headquarters ? info.headquarters.address : "Rocket Road"}
        city={info.headquarters ? info.headquarters.city : "Hawthorne"}
        state={info.headquarters ? info.headquarters.state : "California"}
      />
    </div>
  );
};

export default SpaceX;
