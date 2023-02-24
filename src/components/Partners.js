import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../logo.png";
import gitcoinLogo from "../gitcoinLogo.png";
import gitcoinLogoColor from "../gitcoinLogoColor.png";
import gnosisLogo from "../gnosisLogo.png";
import shapeShiftLogo from "../shapeShiftLogo.png";
import banklessDAOLogo from "../banklessDAOLogo.png";
import thalesLogo from "../thalesLogo.png";
import venusLogo from "../venusLogo.png";
import speraxLogo from "../speraxLogo.png";
import raidGuildLogo from "../raidGuildLogo.png";
import protocolLabsLogo from "../protocolLabsLogo.png";
import OKXLogo from "../OKXLogo.png";

const Partners = () => {
  return (
    <div className="partners-container">
      <motion.div
        // className="hero-btns-container"
        initial={{
          y: "-40",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 3, duration: 2 }}
      ></motion.div>
      <motion.div
        // className="logo-container"
        initial={{
          y: "-40",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1 }}
      >
        <motion.div className="logos-top-row">
          <span>Trusted by</span>
          <img className="logo-img" src={gitcoinLogo}></img>
          <img className="logo-img" src={gnosisLogo}></img>
          <img className="logo-img" src={shapeShiftLogo}></img>
          <img className="logo-img" src={raidGuildLogo}></img>
          <img className="logo-img" src={venusLogo}></img>
          <span>+40 more</span>
        </motion.div>
        {/* <motion.div className="logos-bottom-row">
          <img className="logo-img" src={speraxLogo}></img>
          <img className="logo-img" src={protocolLabsLogo}></img>
          <img className="logo-img" src={OKXLogo}></img>
        </motion.div> */}
      </motion.div>

      {/* <motion.span
        initial={{
          y: "-40",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1 }}
        className="partners-span"
      >
        Users of Hedgey
      </motion.span> */}
    </div>
  );
};

export default Partners;
