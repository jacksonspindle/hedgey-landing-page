import React from "react";
import AnimatedText from "./AnimatedText";

const Intro = () => {
  return (
    <div className="hero4-container">
      <div className="content">
        <AnimatedText text={"Gnosis safe."} />
        <AnimatedText text={"Audited."} />
        <AnimatedText text={"custom features."} />
        <AnimatedText text={"multi-chain"} />
        <AnimatedText text={"For investors and others."} />
      </div>
    </div>
  );
};

export default Intro;
