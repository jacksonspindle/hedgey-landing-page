import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animation = useAnimation();

  const divAnimation = {
    hidden: {
      x: -800,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 400,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className="hero-2-container"
      ref={ref}
      initial="hidden"
      //   animate={animation}
      //   variants={divAnimation}
      transition={{
        delayChildren: 0.25,
        staggerChildren: 0.05,
      }}
    >
      <div>
        <h1>Secure, free, on-chain, excellent.</h1>
        <span>On-chain, secure, free tools for your most imoprtant jobs.</span>
      </div>

      <div>
        <p>
          We've created tools that teams at any stage can use to get it right.
          Whether you're Gitcoin or just gettin' started, we give you the tools
          to supercharge your token operations.{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Hero2;
