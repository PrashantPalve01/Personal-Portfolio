import React from "react";
import "./Footer.css";
import Wave2 from "../../img/wave2.png";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={Wave2}
        alt=""
        style={{ width: "100%", height: "300px" }}
        className="wave"
      />
      <div className="f-content">
        <span>
          Designed and build by Prashant Palve, 2025 All rights reserved.
        </span>
        <div className="f-icons">{/*  add social media icons */}</div>
      </div>
    </div>
  );
};
// oj

export default Footer;
