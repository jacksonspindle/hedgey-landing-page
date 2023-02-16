import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      className="nav-container"
      initial={{
        y: "-150",
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 2.7, duration: 2 }}
    >
      <div className="item item1">
        <Link to={"/home"}>Hedgey Labs</Link>
      </div>
      <div className="item item2">
        <div className="item-content-1">
          <Link to={"/pre-token"}>Pre-token</Link>
          <Link to={"/drops"}>Drops</Link>
          <Link to={"/careers"}>Careers</Link>
        </div>
        <div className="item-content-2">
          <Link to={"/login"}>Log In</Link>
          <Link className="get-started-btn" to={"/get-started"}>
            Get Started
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
