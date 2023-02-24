import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav1 = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 720);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 720);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? (
    <motion.div>DESKTOP</motion.div>
  ) : (
    <motion.div>MOBILE</motion.div>
  );
};

export default Nav1;
