import React from "react";

const Footer = ({ founder, founded, employees, address, city, state }) => {
  return (
    <div>
      <footer className="info-footer">
        <div className="company-info">
          <div className="people-info">
            <span>Founder: {founder}</span>
            <span>Founded in: {founded}</span>
            <span>Number of employees: {employees}</span>
          </div>
          <div className="address-info">
            <span>{address}</span>
            <span>{city}</span>
            <span>{state}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
