import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const AnimatedText = ({ text }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const words = text.split("");
  const [letterHovered, setLetterHovered] = useState(
    Array(words.length).fill(false)
  );

  const { scrollYProgress } = useScroll();

  //   const scale = useTransform(scrollYProgress, [0.2, 1], [0.2, 2]);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 1,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hovered: {
      color: "lightgrey",
      transition: {
        type: "tween",
        duration: 0.8,
      },
    },
  };

  const handleHover = (index) => {
    setLetterHovered((prev) => {
      let newLettersHovered = [...prev];
      newLettersHovered[index] = !newLettersHovered[index];
      return newLettersHovered;
    });
  };

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "string",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
    // console.log("use effect hook, inView = ", inView);
  }, [inView]);

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }}
      //   style={{ overflow: "hidden", display: "flex", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      ref={ref}
    >
      {words.map((word, i) => {
        return (
          <motion.span
            // animate={letterHovered[i] ? "hovered" : "visible"}
            // style={{ border: "2px solid red" }}
            className={letterHovered[i] ? "letter-hovered letter" : "letter"}
            onMouseEnter={() => {
              handleHover(i);
            }}
            onMouseLeave={() => {
              handleHover(i);
            }}
            variants={child}
            // animate={child}
            key={i}
            style={{ fontSize: 67 }}
          >
            {word}
          </motion.span>
        );
      })}
      <style>
        {`

        .letter {
            {/* transition: color 2s cubic-bezier(0.4, 0, 1, 1) */}
        }
          .letter-hovered {
            color: yellow;
          }

        `}
      </style>
    </motion.div>
    // <motion.div style={{ scaleX: scrollYProgress }}>
    //   <h1>Test</h1>
    // </motion.div>
  );
};

export default AnimatedText;
