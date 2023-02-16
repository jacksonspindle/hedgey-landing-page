import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll } from "framer-motion";

const ComplexSection = () => {
  const { ref, inView } = useInView();
  let ref1 = useRef(null);
  let { scrollYProgress } = useScroll();

  let refs = {
    ref: ref,
    ref1: ref1,
  };

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((v) => setScroll(v));
  }, [scrollYProgress]);

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{
        background: "black",
        position: "relative",
        height: "2800px",
        display: "flex",
        justifyContent: "left",
        ...(scroll < 0.245
          ? { alignItems: "start" }
          : scroll > 0.614
          ? { alignItems: "end" }
          : null),
      }}
    >
      <motion.div>
        <motion.div
          className="video"
          style={{
            height: "280px",
            width: "80px",
            backgroundColor: "red",
            opacity: 0.4,
            border: "none",
            position: scroll < 0.245 || scroll > 0.614 ? "relative" : "fixed",
            ...(scroll < 0.245 || scroll > 0.614
              ? {}
              : { top: "0px", left: "0px" }),
          }}
          //   layout
          transition={{ ease: "easeIn", duration: 0.1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      </motion.div>
      <div>
        {scroll > 0.245 && scroll < 0.614 && (
          <motion.p
            style={{
              color: "red",
              position: "fixed",
              top: "10vh",
              left: "10vw",
            }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          >
            {scroll} :
            {scroll < 0.445
              ? "Token"
              : scroll < 0.53
              ? "Distribution"
              : "Vesting"}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default ComplexSection;
