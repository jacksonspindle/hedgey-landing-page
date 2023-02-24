import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const Nav = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(screenWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return screenWidth > 720 ? (
    <motion.div
      className="nav-container"
      initial={{
        y: "-150",
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 0.7, duration: 2 }}
    >
      <div className="item item1">
        <Link to={"/home"}>Hedgey Labs</Link>
      </div>
      <div className="item item2">
        <div className="item-content-1">
          <Link to={"/pre-token"}>Documentation</Link>
          <Link to={"/drops"}>Careers</Link>
          <Link to={"/careers"}>Solutions</Link>
        </div>
        <div className="item-content-2">
          <Link
            className="get-started-btn"
            style={{
              backgroundColor: "white",
              color: "#363636",
              border: "1px solid #363636",
            }}
            to={"/get-started"}
          >
            Get Access
          </Link>
        </div>
      </div>
    </motion.div>
  ) : (
    // <motion.div className="item item1">
    //   <Link to={"/home"}>Hedgey Labs</Link>
    //   <motion.div>
    //     <motion.ul>
    //       <Link to={"/pre-token"}>Pre-token</Link>
    //       <Link to={"/drops"}>Drops</Link>
    //       <Link to={"/careers"}>Careers</Link>
    //       <Link className="get-started-btn" to={"/get-started"}>
    //         Get Started
    //       </Link>
    //     </motion.ul>
    //   </motion.div>
    // </motion.div>

    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <div>
        <Link className="logo-container-mobile" to={"/home"}>
          <br></br>
          Hedgey Labs
        </Link>
      </div>

      <div className="nav-dropdown">
        {/* <div>
          <Link className="get-started-btn margin-left" to={"/get-started"}>
            Get Started
          </Link>
        </div> */}
        <div className="hamburger-container">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />

          <motion.ul
            className="mobile-nav"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>
              <Link to={"/pre-token"}>Documentation</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to={"/drops"}>Careers</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to={"/careers"}>Solutions</Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
