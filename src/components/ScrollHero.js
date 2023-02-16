import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollHero = () => {
  return (
    <div>
      <Section />
      <Section />
    </div>
  );
};

const Section = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "70vw",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <motion.div
        style={{ height: "100px", backgroundColor: "blue", width: width }}
      ></motion.div>
    </div>
  );
};

export default ScrollHero;
