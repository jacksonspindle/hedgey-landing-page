import React, { useState, useEffect, useRef } from "react";
import {
  useMotionValueEvent,
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const Hero6 = () => {
  const [textContent, setTextContent] = useState("vesting");
  let ref1 = useRef(null);
  let { scrollYProgress, scrollY } = useScroll({
    target: ref1,
    offset: ["end end", "end start"],
  });
  const [scroll, setScroll] = useState(0);
  let width = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll Progress", latest);
    if (latest > 0.2) {
      console.log("Bottom!");
    }
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange((v) => setScroll(v));
  }, [scrollYProgress]);

  //   useEffect(() => {
  //     console.log(scrollYProgress);
  //     setScroll(scrollYProgress);
  //   }, [scrollYProgress]);

  return (
    <div ref={ref} className="hero6-container">
      {/* <motion.div
        style={{ width: width, backgroundColor: "blue", height: "100px" }}
      >
        TEST
      </motion.div> */}
      <div className="video-content">
        <div className="video"></div>
      </div>
      <div className="text-content-container">
        <div className="tabs-container">
          <button
            onClick={() => {
              setTextContent("vesting");
              console.log(scroll);
            }}
          >
            Vesting
          </button>
          <button onClick={() => setTextContent("distribution")}>
            Distribution
          </button>
          <button onClick={() => setTextContent("swaps")}>Swaps</button>
        </div>
        {scroll > 0.04 ? (
          <motion.div
            key={textContent}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, transition: { duration: 0.5 }, x: 0 }}
            className="text-content"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              For setting up your big launch
            </motion.h1>
            {textContent === "vesting"
              ? "Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting"
              : textContent === "distribution"
              ? "Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution"
              : "Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps"}
          </motion.div>
        ) : (
          <motion.div
            key={textContent}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, transition: { duration: 1 }, x: 0 }}
            className="text-content"
            // style={{ position: "fixed" }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
            >
              For Live Treasuries
            </motion.h1>
            {textContent === "vesting"
              ? "Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting Vesting"
              : textContent === "distribution"
              ? "Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution Distribution"
              : "Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps Swaps"}
          </motion.div>
        )}

        {/* {scroll > 0 ? <div>THIS IS IT</div> : ""} */}
        {/* {scroll > 0.1 ? (
          <motion.div className="test">test</motion.div>
        ) : (
          <motion.div className="success">success</motion.div>
        )} */}
        <>
          scrollYProgress.current: {scrollYProgress.current}
          <br />
          scrollYProgress.hookedYPostion: {scroll}
          <br />
        </>
      </div>
    </div>
  );
};

export default Hero6;
