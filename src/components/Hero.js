import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";
import mainAnimation from "../mainAnimation.mov";
import Partners from "./Partners";

const Hero = () => {
  return (
    <div className="hero-container-outer">
      <div className="hero-container">
        <div className="hero-text">
          {/* <motion.h1
          initial={{
            y: "-150",
          }}
          animate={{
            color: "red",
          }}
          transition={{ delay: 0, duration: 2 }}
          className="hero-text"
        >
          We help token managers do the hard stuff.
        </motion.h1> */}
          <AnimatedTitle text={"Token management for on-chain teams."} />
        </div>
        <div>
          <motion.p
            initial={{
              y: "-150",
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 2.7, duration: 2 }}
          >
            Lock, vest, and distribute tokens to your team, community, and
            investors.
          </motion.p>
        </div>
        <motion.div
          initial={{
            y: "-150",
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 2.9, duration: 2 }}
          className="hero-btns-container"
        >
          <Link className="get-started-button-hero" to="/get-started">
            Launch App
          </Link>
          <Link className="five-things-btn" to="/get-started">
            Book Demo
          </Link>
        </motion.div>
        <div>
          <video
            className="main-animation"
            style={{
              position: "absolute",
              top: "200px",
              right: "5vw",
              zIndex: -1,
            }}
            src={mainAnimation}
            // width="50%"
            height="auto"
            // controls="controls"
            autoPlay="true"
            type="video/mov"
            loop
            muted
          ></video>
        </div>
        {/* <motion.div
        className="hero-btns-container"
        initial={{
          y: "-150",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 3, duration: 2 }}
      >
        <span>On-chain. Audited. Used by the best</span>
      </motion.div>
      <motion.div
        className="logo-container"
        initial={{
          y: "-150",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 3, duration: 2 }}
      >
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
        <img className="logo-img" src={logo}></img>
      </motion.div> */}
        <Partners />
      </div>
    </div>
  );
};

export default Hero;
