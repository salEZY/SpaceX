import React, { useState, useEffect } from "react";
import axios from "axios";
import Launch from "./Launch";
import SpaceXHeader from "./SpaceXHeader";

import "./SpaceX.css";

const COMPANY_INFO = "https://api.spacexdata.com/v3/info";
const LAUNCHES_URL = "https://api.spacexdata.com/v3/launches";

const SpaceX = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(LAUNCHES_URL);
      setData(result.data);
      const teslaInfo = await axios(COMPANY_INFO);
      setInfo(teslaInfo.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <SpaceXHeader
        name={info.name}
        founder={info.founder}
        founded={info.founded}
        summary={info.summary}
      />
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
    </div>
  );
};

export default SpaceX;
