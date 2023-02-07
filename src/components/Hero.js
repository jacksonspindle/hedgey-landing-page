import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1 className="hero-text">We help token managers do the hard stuff.</h1>
      </div>
      <div>
        <p>
          Free protocols to help token teams do vesting, distributions, lockups,
          swaps, and more. From pre-launch to unicorn and everything in between.
        </p>
      </div>
      <div className="hero-btns-container">
        <Link className="get-started-btn" to="/get-started">
          Get Started
        </Link>
        <Link className="five-things-btn" to="/get-started">
          5 things every token manager needs
        </Link>
      </div>
      <div className="hero-btns-container">
        <span>On-chain. Audited. Used by the best</span>
      </div>
      <div className="logo-container">
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
      </div>
    </div>
  );
};

export default Hero;
