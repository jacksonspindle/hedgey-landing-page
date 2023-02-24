// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import twitterBadge from "../../src/twitterBadge.png";

// const TwitterFeed = () => {
//   const { inView } = useInView();
//   const ref = useRef(null);
//   let { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end end"],
//   });

//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     scrollYProgress.onChange((v) => setScroll(v));
//     console.log("Twitter Scroll: ", scroll);
//   }, [scroll]);

//   useEffect(() => {
//     console.log("use effect hook, inView = ", inView);
//   }, [inView]);

//   return (
//     <motion.blockquote
//       initial={{
//         opacity: 0,
//         y: 100,
//         x: "15vw",
//         backgroundColor: "white",
//       }}
//       animate={{
//         opacity: 1,
//         y: -100,
//         // x: "5vw",
//         transition: { duration: 4 },
//         backgroundColor: "black",
//       }}
//       class="twitter-tweet"
//     >
//       <div className="tweet-header">
//         <img
//           className="twitter-pfp"
//           src="https://pbs.twimg.com/profile_images/1620462677700100096/Rzjv7oJI_400x400.jpg"
//         ></img>
//         <div className="twitter-account-container">
//           <div className="twitter-account-name">
//             <p>Hedgey 🦔</p>
//             <img className="twitter-badge" src={twitterBadge}></img>
//           </div>
//           <div className="twitter-follow-btn-container">
//             <span>@HedgeyFinance</span>·<a>Follow</a>
//           </div>
//         </div>
//       </div>
//       <p lang="en" dir="ltr">
//         A new class of
//         <a href="https://twitter.com/RaidGuild?ref_src=twsrc%5Etfw">
//           @RaidGuild
//         </a>
//         Hedgeys went out and are looking freshhhhh.<br></br>⚔️⚔️⚔️{" "}
//         <a href="https://t.co/joW8IeJzvq">pic.twitter.com/joW8IeJzvq</a>
//       </p>
//       &mdash; Hedgey 🦔 (@hedgeyfinance)
//       <a
//         className="twitter-date"
//         href="https://twitter.com/hedgeyfinance/status/1626263119986057216?ref_src=twsrc%5Etfw"
//       >
//         February 16, 2023
//       </a>
//     </motion.blockquote>
//   );
// };

// export default TwitterFeed;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const carouselContent = [
  {
    id: 1,
    title: "First Container",
    description: "This is the first container.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Second Container",
    description: "This is the second container.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Third Container",
    description: "This is the third container.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Fourth Container",
    description: "This is the fourth container.",
    image: "https://via.placeholder.com/150",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % carouselContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      {carouselContent.map((content, index) => {
        const isNext = index === (activeIndex + 1) % carouselContent.length;
        const position =
          index === activeIndex ? "0%" : isNext ? "100%" : "-100%";

        return (
          <motion.div
            key={content.id}
            className="carousel-item"
            style={{
              width: `${100 / carouselContent.length}%`,
              x: position,
            }}
            animate={{
              x: position,
              opacity: 1,
            }}
            exit={{
              x: isNext ? "-100%" : "100%",
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <img src={content.image} alt={content.title} />
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Carousel;
