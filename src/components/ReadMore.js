import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import readMoreImage from "../../src/readMoreImage.png";
import defaultProfile from "../../src/defaultProfile.png";

const ReadMore = () => {
  return (
    <motion.div className="read-more">
      <motion.h1 className="read-more-h1">Read More</motion.h1>
      <motion.div className="read-more-container">
        <motion.div className="read-more-image">
          <motion.img alt="read-more-image" src={readMoreImage}></motion.img>
        </motion.div>
        <motion.div className="read-more-text-container">
          <motion.div className="read-more-profile-container">
            <motion.img
              className="read-more-profile"
              src={defaultProfile}
              alt="read-more-profile"
            ></motion.img>
            <motion.div className="read-more-profile-content">
              <h3>Filler Name</h3>
              <span>Feb 21 · 6 min read</span>
            </motion.div>
          </motion.div>
          <motion.h1 className="read-more-header">
            Introducing Superfluid Vesting, a Liquid and Composable Vesting
            Solution
          </motion.h1>
          <motion.p className="read-more-body">
            Superfluid is proud to announce the launch of its easy-to-use,
            liquid, and composable vesting...
          </motion.p>
          <Link to="" className="read-more-link">
            Read more
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ReadMore;
