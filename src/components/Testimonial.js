import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { motion } from "framer-motion";
import gitcoinLogo from "../../src/gitcoinLogo.png";
import gnosisLogo from "../../src/gnosisLogo.png";
import shapeShiftLogo from "../../src/shapeShiftLogo.png";
import defaultProfile from "../../src/defaultProfile.png";

const Testimonial = () => (
  <motion.div className="testimonial-container">
    <motion.h1 className="testimonial-header">Testimonials</motion.h1>
    <motion.h3 className="testimonial-subheader">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </motion.h3>
    <motion.div className="testimonial-block-container">
      <motion.div className="testimonial-block-column-1">
        <motion.div className="testimonial-block">
          <motion.img
            src={gitcoinLogo}
            className="testimonial-brand-logo"
          ></motion.img>
          <motion.p className="testimonial-quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </motion.p>
          <motion.div className="testimonial-profile-container">
            <img src={defaultProfile} className="testimonial-profile-img"></img>
            <div className="testimonial-profile-text-container">
              <h1 className="testimonial-name">Kyle</h1>
              <span className="testimonial-affiliation">
                Filler Affiliation
              </span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="testimonial-block">
          <motion.img
            src={gnosisLogo}
            className="testimonial-brand-logo"
          ></motion.img>
          <motion.p className="testimonial-quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </motion.p>
          <motion.div className="testimonial-profile-container">
            <img src={defaultProfile} className="testimonial-profile-img"></img>
            <div className="testimonial-profile-text-container">
              <h1 className="testimonial-name">Stefan</h1>
              <span className="testimonial-affiliation">
                Filler Affiliation
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="testimonial-block-column-2">
        <motion.div className="testimonial-block">
          <motion.img
            src={shapeShiftLogo}
            className="testimonial-brand-logo"
          ></motion.img>
          <motion.p className="testimonial-quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </motion.p>
          <motion.div className="testimonial-profile-container">
            <img src={defaultProfile} className="testimonial-profile-img"></img>
            <div className="">
              <h1 className="testimonial-name">Brad</h1>
              <span className="testimonial-affiliation">
                Filler Affiliation
              </span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="testimonial-block">
          <motion.img src="" className="testimonial-brand-logo"></motion.img>
          <motion.p className="testimonial-quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </motion.p>
          <motion.div className="testimonial-profile-container">
            <img src={defaultProfile} className="testimonial-profile-img"></img>
            <div className="">
              <h1 className="testimonial-name">Filler Name</h1>
              <span className="testimonial-affiliation">
                Filler Affiliation
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Testimonial;
