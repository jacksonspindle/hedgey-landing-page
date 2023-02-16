import React from "react";
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

const Partners = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <motion.div
        className="hero-btns-container"
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
        className="logo-container"
        initial={{
          y: "-40",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 3, duration: 2 }}
      >
        <img className="logo-img" src={gitcoinLogoColor}></img>
        <img className="logo-img" src={gnosisLogo}></img>
        <img className="logo-img" src={shapeShiftLogo}></img>
        <img className="logo-img" src={banklessDAOLogo}></img>
        <img className="logo-img" src={thalesLogo}></img>
        <img className="logo-img" src={venusLogo}></img>
        <img className="logo-img" src={speraxLogo}></img>
        <img className="logo-img" src={gitcoinLogoColor}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
      </motion.div>
      <motion.span
        initial={{
          y: "-40",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 3, duration: 2 }}
        style={{
          marginBottom: "-2rem",
          fontSize: "17px",
          marginTop: "1rem",
          fontWeight: 700,
          fontFamily: "proxima-nova-thin",
          color: "#605E5E",
        }}
      >
        Trusted by the best web3 orgs
      </motion.span>
    </div>
  );
};

export default Partners;
