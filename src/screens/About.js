import React from "react";
import "./About.css";
import about_icon from "../assets/undraw_high_five.svg";
import { useTitle } from "../constants";

const About = () => {
  useTitle("About");
  return (
    <div className="about">
      <div className="about_container">
        <div className="about-cont_title">
          <div className="about-cont_text">
            <h1>About Us</h1>
          </div>
          <img src={about_icon} alt="" />
        </div>
        <div className="about-cont_body" style={{ fontSize: 22 }}>
          Our team mission is to undertake the marketing of unadulterated
          agriculture products mainly organic to our esteemed customers with
          absolute commitment to quality and on fair price.
        </div>
      </div>
    </div>
  );
};

export default About;
