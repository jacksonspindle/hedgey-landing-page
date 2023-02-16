import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      className="faqContainer"
    >
      <h1>FAQ</h1>
      <br></br>
      <div className="faq-outer-container">
        {faqItems.map((item, index) => (
          <motion.div className="faq-container" key={index}>
            {index === 0 ? (
              ""
            ) : (
              <div
                style={{
                  height: "3px",
                  backgroundColor: "#999996",
                  width: "100%",
                }}
              ></div>
            )}
            <motion.div
              className="faq"
              onClick={() => handleItemClick(index)}
              // initial={{ backgroundColor: "#F2F2F2" }}
              animate={
                {
                  //   backgroundColor: activeIndex === index ? "#C4C4C4" : "#F6F6F6",
                }
              }
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="icon"
                initial={{ rotate: 0 }}
                animate={{
                  rotate: activeIndex === index ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.div>
              <h3>{item.question}</h3>
            </motion.div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "44px" }}
                  exit={{ height: 0 }}
                  className={"question"}
                  style={{ width: "95%" }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.01 } }}
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
