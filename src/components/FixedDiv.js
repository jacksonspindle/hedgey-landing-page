import { motion } from "framer-motion";

function FixedDiv() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      I will stay fixed in place even when you scroll!
    </motion.div>
  );
}

export default FixedDiv;
