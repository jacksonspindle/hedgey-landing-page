import React from "react";
import { Link } from "react-router-dom";
import Partners from "./Partners";

const Hero5 = () => {
  return (
    <div className="hero5-container">
      <div className="hero5-content">
        From pre-launch to Unicorn, and every stage in between.
        <br />
        <br />
        <p>
          Beautiful interfaces powered by on-chain contracts to help you do your
          biggest treasury jobs. Hyper customizable. Ultra secure. Built to set
          you up for success today and 10 years down the road.
        </p>
        {/* <Link className="hero5-btn" to="/get-started">
          Get Started
        </Link> */}
        <Partners />
      </div>
    </div>
  );
};

export default Hero5;
