import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "bottom",
        flexDirection: "column",
        alignItems: "center",
        height: 600,
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
          width: "600px",
          textAlign: "center",
          marginTop: "3rem",
          fontSize: 27,
          fontFamily: "proxima-nova-thin",
          fontWeight: 600,
        }}
      >
        <p>DxDAO testimonial vesting</p>
        <p>
          Protocol labs testimonial on investment process. OKX ventures and
          foresight as well
        </p>
        <p>
          Kyle quote on us playing a major role in the success of gitcoins
          diversification.
        </p>
        <p>Gitcoin testimonial</p>
      </div>
    </motion.div>
  );
};

export default Testimonial;
