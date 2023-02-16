import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        // backgroundColor: "red",
        justifyContent: "center",
        flexDirection: "column",
        height: 600,
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "proxima-nova-extra-bold",
          fontSize: 44,
          textAlign: "center",
          maxWidth: 845,
        }}
      >
        We help the biggest on-chain teams avoid risk and setup to thrive
      </h1>
      <div
        style={{
          marginTop: "3rem",
          fontSize: 27,
          fontFamily: "proxima-nova-thin",
          fontWeight: 600,
        }}
      >
        <p>Book at 15 minute call to get free access for life.</p>
      </div>
      <button
        style={{ marginTop: "2rem", color: "white" }}
        className="get-started-btn"
      >
        Begin
      </button>
    </motion.div>
  );
};

export default CallToAction;
