import React from "react";
import "./Aboutus.css";

const Mission = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>Powering the Future</h1>
          <h2>eSIM Manufacturing</h2>
          <p>
          At the forefront of eSIM innovation, our state-of-the-art manufacturing facility employs the latest technologies and processes to deliver reliable, high-performance eSIM chips tailored to your business needs. From design to production, we're committed to excellence at every step, ensuring your eSIM solution is built to last
          </p>
         
          <button className="about-us-button primary-button">Learn More</button>
          <button className="about-us-button">Explore More</button>
        </div>
        <img
          src="/image.png"
          alt="About Us"
          className="about-us-image"
        />
      </div>
    </div>
  );
};

export default Mission;

