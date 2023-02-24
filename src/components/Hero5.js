import React from "react";
import { Link } from "react-router-dom";
import Partners from "./Partners";

const Hero5 = () => {
  return (
    <div className="prelaunch-container">
      <div>
        Why do on-chain teams choose Hedgey?
        <br />
        <br />
        <p>
          We've worked with the best on-chain teams during their biggest token
          treasury jobs. We combine over $100b in treasury management experience
          with on-chain tools built to do the job you need, exactly how it needs
          to be done, in a way your team, community, and key stakeholders will
          love.
        </p>
        {/* <Link className="hero5-btn" to="/get-started">
          Get Started
        </Link> */}
        {/* <Partners /> */}
      </div>
    </div>
  );
};

export default Hero5;
