import React from "react";

const Footer = ({ founder, founded, employees, address, city, state }) => {
  return (
    <div>
      <footer className="info-footer">
        <div className="company-info">
          <div className="people-info">
            <span>
              <i
                className="fas fa-user-astronaut"
                style={{
                  marginLeft: "55px",
                  fontSize: "35px",
                }}
              ></i>
            </span>
            <span>Founder: {founder}</span>
            <span>Founded in: {founded}</span>
            <span>Number of employees: {employees}</span>
          </div>
          <div className="address-info">
            <span>
              <i
                className="far fa-address-card"
                style={{
                  marginRight: "55px",
                  fontSize: "35px",
                }}
              ></i>
            </span>
            <span>Address: {address}</span>
            <span>City: {city}</span>
            <span>State: {state}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
