import React from "react";
import { motion } from "framer-motion";
import gitcoinLogo from "../../src/gitcoinLogo.png";
import defaultProfile from "../../src/defaultProfile.png";
import protocolLabsLogo from "../protocolLabsLogo.png";

const Testimonial = () => (
  <motion.div className="testimonial-container">
    {/* <motion.h1 className="testimonial-header">Testimonials</motion.h1>
    <motion.h3 className="testimonial-subheader">
      Hedgey helped Gitcoin's treasury during a major inflection point. We were
      able to streamline a diversification, invite a multitude of VCs to a
      diversification event, and expand our runway by three years. These people
      know what they are doing.
    </motion.h3> */}
    <motion.div className="testimonial-block-container">
      <motion.div className="testimonial-block-column-1">
        <motion.div className="testimonial-block">
          <motion.img
            alt="logo"
            src={gitcoinLogo}
            className="testimonial-brand-logo"
          ></motion.img>
          <motion.p className="testimonial-quote">
            Hedgey helped Gitcoin's treasury during a major inflection point. We
            were able to streamline a diversification, invite a multitude of VCs
            to a diversification event, and expand our runway by three years.
            These people know what they are doing.
          </motion.p>
          <motion.div className="testimonial-profile-container">
            <img
              alt="logo"
              src={defaultProfile}
              className="testimonial-profile-img"
            ></img>
            <div className="testimonial-profile-text-container">
              <h1 className="testimonial-name">Kyle</h1>
              <span className="testimonial-affiliation">
                Gitcoin Foundation
              </span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="testimonial-block">
          <motion.img
            alt="logo"
            style={{ width: "300px" }}
            src={protocolLabsLogo}
            className="testimonial-brand-logo"
          ></motion.img>
          <motion.p className="testimonial-quote">
            Hedgey helped Gitcoin's treasury during a major inflection point. We
            were able to streamline a diversification, invite a multitude of VCs
            to a diversification event, and expand our runway by three years.
            These people know what they are doing.
          </motion.p>
          <motion.div className="testimonial-profile-container">
            <img
              alt="logo"
              src={defaultProfile}
              className="testimonial-profile-img"
            ></img>
            <div className="testimonial-profile-text-container">
              <h1 className="testimonial-name">Brad</h1>
              <span className="testimonial-affiliation">Protocol Labs</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Testimonial;
