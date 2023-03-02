import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll } from "framer-motion";
import animation1Desktop from "../../src/animation1_desktop.mov";
import animation2Desktop from "../../src/animation2_desktop.mov";
import animation3Desktop from "../../src/animation3_desktop.mov";
import animation4Desktop from "../../src/animation4_desktop.mov";
import animation5Desktop from "../../src/animation5_desktop.mov";
import animation6Desktop from "../../src/animation6_desktop.mov";
import animation7Desktop from "../../src/animation7_desktop.mov";
import animation1Mobile from "../../src/animation1_mobile.mov";
import animation2Mobile from "../../src/animation2_mobile.mov";
import animation3Mobile from "../../src/animation3_mobile.mov";
import animation4Mobile from "../../src/animation4_mobile.mov";
import animation5Mobile from "../../src/animation5_mobile.mov";
import animation6Mobile from "../../src/animation6_mobile.mov";
import animation7Mobile from "../../src/animation7_mobile.mov";

const ComplexSection = () => {
  const { ref, inView } = useInView();
  let { scrollYProgress } = useScroll();

  const [scroll, setScroll] = useState(0);
  const [textContent, setTextContent] = useState("Vesting");
  const [position, setPosition] = useState(0);
  const [mobilePosition, setMobilePosition] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [video, setVideo] = useState(animation1Desktop);
  const [mobileVideo, setMobileVideo] = useState(animation1Mobile);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(screenWidth);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    scrollYProgress.onChange((v) => setScroll(v));
  }, [scrollYProgress]);

  // useEffect(() => {
  //   console.log(scroll);
  // }, [scroll]);

  useEffect(() => {
    console.log(textContent);
    if (textContent === "Vesting") {
      setVideo(animation1Desktop);
      setMobileVideo(animation1Mobile);
    } else if (textContent === "Investor Lockups") {
      setVideo(animation2Desktop);
      setMobileVideo(animation2Mobile);
    } else if (textContent === "Fundraising") {
      setVideo(animation3Desktop);
      setMobileVideo(animation3Mobile);
    } else if (textContent === "Time-Locks") {
      setVideo(animation4Desktop);
      setMobileVideo(animation4Mobile);
    } else if (textContent === "Token Generation") {
      setVideo(animation5Desktop);
      setMobileVideo(animation5Mobile);
    } else if (textContent === "Community Claims") {
      setVideo(animation6Desktop);
      setMobileVideo(animation6Mobile);
    } else if (textContent === "Teams and Investors") {
      setVideo(animation7Desktop);
      setMobileVideo(animation7Mobile);
    } else if (textContent === "Pre-token") {
      setVideo(animation1Desktop);
      setMobileVideo(animation1Mobile);
    } else if (textContent === "Live Tokens") {
      setVideo(animation2Desktop);
      setMobileVideo(animation2Mobile);
    }
  }, [textContent]);

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
  }, [inView]);

  useEffect(() => {
    if (scroll < 0.2) {
      setTextContent("Vesting");
      setPosition(0);
    } else if (scroll > 0.2 && scroll < 0.2397) {
      // setTextContent("vesting");
      setPosition(1);
    } else if (scroll > 0.2397 && scroll < 0.335) {
      setPosition(2);
    } else if (scroll > 0.335 && scroll < 0.4305) {
      setPosition(3);
    } else if (scroll > 0.4305 && scroll < 0.667) {
      setPosition(4);
    }
  }, [scroll]);

  useEffect(() => {
    if (screenWidth > 800) {
      if (position === 1) {
        setTextContent("Vesting");
      } else if (position === 2) {
        setTextContent("Token Generation");
      } else if (position === 3) {
        setTextContent("Pre-token");
      }
    }
  }, [position]);

  useEffect(() => {
    console.log("mobile position", mobilePosition);
    if (screenWidth < 800) {
      if (scroll < 0.25) {
        setMobilePosition(1);
      }
    }
  }, [scroll]);

  return screenWidth > 800 ? (
    <motion.div
      ref={ref}
      style={{
        background: "black",
        position: "relative",
        height: "4500px",
        display: "flex",
        justifyContent: "left",
        ...(scroll < 0.2
          ? { alignItems: "start" }
          : scroll > 0.667
          ? { alignItems: "end" }
          : null),
      }}
    >
      <p style={{ position: "fixed", top: 50, right: 20, color: "white" }}>
        {scroll}
        <br></br>
        {position}
        <br></br>
        {screenWidth}
      </p>
      <motion.div>
        <motion.div
          className="video"
          style={{
            height: "100vh",
            width: "50vw",
            backgroundColor: "black",
            // opacity: 0.4,
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            position: scroll < 0.2 || scroll > 0.667 ? "relative" : "fixed",
            ...(scroll < 0.2 || scroll > 0.667
              ? {}
              : { top: "0px", left: "0px" }),
          }}
          //   layout
          transition={{ ease: "easeIn", duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            style={{
              backgroundColor: "#EBE9EA",
              width: "90%",
              height: "90%",
              borderRadius: "2rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              // margin: "4rem",
              border: "2px solid black",
            }}
          >
            <video
              // className="main-animation"
              src={video}
              width="100%"
              style={{ borderRadius: "2rem", height: "100%" }}
              // height="auto"
              // controls="controls"
              autoPlay="true"
              type="video/mov"
              loop
              muted
            ></video>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div>
        {scroll > 0.2 && scroll < 0.667 && (
          <motion.div
            style={{
              color: "white",
              position: "fixed",
              bottom: "40vh",
              right: "1vw",
              //   backgroundColor: "red",
            }}
            // animate={{
            //   opacity: 1,
            //   y: 0,
            //   transition: { duration: 1 },
            // }}
            // initial={{ opacity: 0, y: 0 }}
            // exit={{ opacity: 0 }}
          >
            {scroll < 0.2397 ? (
              <motion.div style={{ width: "50vw" }}>
                <motion.div
                  className="product-page-button-container"
                  animate={{
                    opacity: 1,
                    y: -30,
                    transition: { duration: 1 },
                  }}
                  initial={{ opacity: 0, y: -300 }}
                >
                  <motion.button
                    onClick={() => {
                      setTextContent("Vesting");
                      // setVideo(animation1Desktop);
                    }}
                    style={
                      textContent === "Vesting"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Vesting
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setTextContent("Investor Lockups");
                      // setVideo(animation2Desktop);
                    }}
                    style={
                      textContent === "Investor Lockups"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Investor Lockups
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setTextContent("Fundraising");
                      // setVideo(animation3Desktop);
                    }}
                    style={
                      textContent === "Fundraising"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Fundraising
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setTextContent("Time-Locks");
                      // setVideo(animation4Desktop);
                    }}
                    style={
                      textContent === "Time-Locks"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Time-Locks
                  </motion.button>
                </motion.div>
                <motion.div
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                    exit: {
                      opacity: 0,
                      y: -300,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
                  style={{ width: "45vw" }}
                  className={"product-content-container"}
                  key={position}
                >
                  <motion.h1
                    style={{
                      fontSize: 44,
                      fontFamily: "proxima-nova-extra-bold",
                    }}
                  >
                    1: For live token treasuries
                  </motion.h1>

                  {/* {textContent === "" ? (
                    <motion.div
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                        exit: {
                          opacity: 0,
                          y: -300,
                          transition: { duration: 0.5 },
                        },
                      }}
                      initial={{
                        opacity: 0,
                        y: 300,
                        transition: { duration: 1 },
                      }}
                      style={{
                        fontFamily: "proxima-nova-thin",
                        fontSize: 27,
                      }}
                      key={textContent}
                    >
                      <motion.p>
                        1:1
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )} */}

                  {textContent === "Vesting" ? (
                    <motion.div
                      className="product-content-container"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        {textContent}
                      </motion.h1>
                      <motion.p
                        // animate={{
                        //   opacity: 1,
                        //   y: 0,
                        //   transition: { duration: 1 },
                        //   exit: {
                        //     opacity: 0,
                        //     y: -300,
                        //     transition: { duration: 0.5 },
                        //   },
                        // }}
                        // initial={{
                        //   opacity: 0,
                        //   y: 50,
                        //   transition: { duration: 1 },
                        // }}
                        // key={textContent}
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        1:2
                        <br></br>
                        This is vesting the way it should be. On-chain,
                        transperent, and full of risk-reducing features for your
                        security, accounting, and full team needs.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Investor Lockups" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        {textContent}
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        1:3
                        <br></br>
                        Distributing tokens to your investors should be simple.
                        We create secure, simple escrow contracts that let you
                        distribute locked tokens in a way that's composible to
                        their individual needs. Custodianship, governance
                        rights, and more ready to go out of the box.
                        <br></br>
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Fundraising" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                    >
                      <motion.h1 className="product-page-subheader">
                        {textContent}
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        1:4
                        <br></br>
                        Swap tokens using escrowless contracts built or on-chain
                        teams. Add lockups, custom unlock schedules, governance
                        rights and more - right out of the box.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Time-Locks" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                    >
                      <motion.h1 className="product-page-subheader">
                        {textContent}
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        1:4
                        <br></br>
                        Create a time-locked version of your token. This popular
                        tool combines escrow contracts and locked-token NFTs to
                        let teams do everything from distributing locked-tokens
                        as compensation, to creating an incentive for holders to
                        lock liquid tokens. Our weirdest and coolest product for
                        live token communities.
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </motion.div>
              </motion.div>
            ) : scroll > 0.2397 && scroll < 0.335 ? (
              <motion.div style={{ width: "50vw" }}>
                <motion.div
                  className="product-page-button-container"
                  // animate={{
                  //   opacity: 1,
                  //   y: -30,
                  //   transition: { duration: 1 },
                  // }}
                  // initial={{ opacity: 0, y: -300 }}
                >
                  <motion.button
                    onClick={() => setTextContent("Token Generation")}
                    style={
                      textContent === "Token Generation"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Token Generation
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setTextContent("Community Claims");
                      // setVideo(animation5Desktop);
                    }}
                    style={
                      textContent === "Community Claims"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Community Claims
                  </motion.button>
                  <motion.button
                    onClick={() => setTextContent("Teams and Investors")}
                    style={
                      textContent === "Teams and Investors"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Teams and Investors
                  </motion.button>
                </motion.div>
                <motion.div
                  // animate={{
                  //   opacity: 1,
                  //   y: 0,
                  //   transition: { duration: 1 },
                  //   exit: {
                  //     opacity: 0,
                  //     y: -300,
                  //     transition: { duration: 0.5 },
                  //   },
                  // }}
                  // initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
                  // style={{ width: "45vw" }}
                  className={"product-content-container"}
                  key={position}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  initial={{ opacity: 0, y: 300 }}
                  // exit={{ opacity: 0 }}
                  // style={{ width: "45vw" }}
                >
                  <motion.h1
                    style={{
                      fontSize: 44,
                      fontFamily: "proxima-nova-extra-bold",
                    }}
                  >
                    2: For setting up your big token launch
                  </motion.h1>

                  {/* {textContent === "" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.p
                        style={{
                          fontFamily: "proxima-nova-thin",
                          fontSize: 27,
                        }}
                      >
                        2:1
                        <br></br>
                        DAOs are the future of human organization. We create
                        financial infrastructure for DAO treasuries to help them
                        diversify assets, alleviate contributor sell pressure,
                        and prosper through DAO to DAO swaps.
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )} */}

                  {textContent === "Token Generation" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Token Generation
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        2:2
                        <br></br>
                        Token generation events set your course for the next 10
                        years. Get it right with bespoke vesting plans, custom
                        lockups, governance, and the most complex token
                        considerations baked-in on day one.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Community Claims" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Community Claims
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        2:3
                        <br></br>
                        Community distributions are becoming more complex than
                        ever. Create allocation strategies and custom claim
                        pages to distribute your new token in a way everyone can
                        get excited about.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Teams and Investors" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Teams and Investors
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        2:4
                        <br></br>
                        Simple, on-chain vesting for the most complex team
                        needs. Customizable cliffs, post-vesting lockups, unlock
                        cadence, voting rights and more - all at your fingertips
                        through our beautiful UIs.
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </motion.div>
              </motion.div>
            ) : scroll > 0.335 && scroll < 0.4305 ? (
              <motion.div style={{ width: "50vw" }}>
                <motion.div
                  className="product-page-button-container"

                  // animate={{
                  //   opacity: 1,
                  //   y: -30,
                  //   transition: { duration: 1 },
                  // }}
                  // initial={{ opacity: 0, y: -300 }}
                >
                  <motion.button
                    onClick={() => setTextContent("Pre-token")}
                    style={
                      textContent === "Pre-token"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Pre-token
                  </motion.button>
                  <motion.button
                    onClick={() => setTextContent("Live Tokens")}
                    style={
                      textContent === "Live Tokens"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Live Tokens
                  </motion.button>
                  {/* <motion.button
                    onClick={() => setTextContent("Swaps")}
                    style={
                      textContent === "Swaps"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Swaps
                  </motion.button> */}
                </motion.div>
                <motion.div
                  className={"product-content-container"}
                  key={position}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  initial={{ opacity: 0, y: 300 }}
                  style={{ width: "45vw" }}
                  exit={{ opacity: 0 }}
                >
                  <motion.h1
                    style={{
                      fontSize: 44,
                      fontFamily: "proxima-nova-extra-bold",
                    }}
                  >
                    3: For doing your homework
                  </motion.h1>

                  {/* {textContent === "" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.p
                        style={{
                          fontFamily: "proxima-nova-thin",
                          fontSize: 27,
                        }}
                      >
                        3:1
                        <br></br>
                        DAOs are the future of human organization. We create
                        financial infrastructure for DAO treasuries to help them
                        diversify assets, alleviate contributor sell pressure,
                        and prosper through DAO to DAO swaps.
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )} */}

                  {textContent === "Pre-token" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Pre-token
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        3:2
                        <br></br>
                        Planning a token launch and have questions? We're
                        pulling together a cohort of pre-token companies to
                        share resources, networks, and more. Join season 1 to
                        get free access.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Live Tokens" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Live Tokens
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        3:3
                        <br></br>
                        Figuring out the best way to create a vesting plan,
                        diversifying your native asset, or knock out something
                        mission-critical for your treasury? We've got the
                        network, people, and tools. Let's make it happen.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Swaps" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        {textContent}
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        3:4
                        <br></br>
                        swaps content swaps content swaps content
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div style={{ width: "50vw" }}>
                <motion.div
                  className="product-page-button-container"
                  // animate={{
                  //   opacity: 1,
                  //   y: -30,
                  //   transition: { duration: 1 },
                  // }}
                  // initial={{ opacity: 0, y: -300 }}
                >
                  <motion.button
                    onClick={() => setTextContent("Vesting")}
                    style={
                      textContent === "Vesting"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Team
                  </motion.button>
                  <motion.button
                    onClick={() => setTextContent("Distribution")}
                    style={
                      textContent === "Distribution"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Community
                  </motion.button>
                  <motion.button
                    onClick={() => setTextContent("Swaps")}
                    style={
                      textContent === "Swaps"
                        ? {
                            border: "2px solid white",
                            transition: ".5s all ease-in-out",
                            backgroundColor: "white",
                            color: "#363636",
                          }
                        : {
                            border: "2px solid grey",
                            transition: ".5s all ease-in-out",
                          }
                    }
                    className="complexSection-btn"
                  >
                    Investors
                  </motion.button>
                </motion.div>
                <motion.div
                  className="product-content-container"
                  key={position}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  initial={{ opacity: 0, y: 300 }}
                  style={{ width: "45vw" }}
                  exit={{ opacity: 0 }}
                  // animate={{
                  //   opacity: 1,
                  //   y: 0,
                  //   transition: { duration: 1 },
                  // }}
                  // initial={{ opacity: 0, y: 300 }}
                  // style={{ width: "45vw" }}
                >
                  <motion.h1
                    style={{
                      fontSize: 44,
                      fontFamily: "proxima-nova-extra-bold",
                    }}
                  >
                    4: For your team, community, and investors.
                  </motion.h1>

                  {textContent === "" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.p
                        style={{
                          fontFamily: "proxima-nova-thin",
                          fontSize: 27,
                        }}
                      >
                        4:1
                        <br></br>
                        DAOs are the future of human organization. We create
                        financial infrastructure for DAO treasuries to help them
                        diversify assets, alleviate contributor sell pressure,
                        and prosper through DAO to DAO swaps.
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )}

                  {textContent === "Vesting" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Team
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        4:2
                        <br></br>
                        Give your team access to beautiful UIs to view, manage,
                        and interact with their vesting and locked tokens.
                        Everything your team will want and more - right at their
                        fingertips.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Distribution" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Community
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        4:3
                        <br></br>
                        If you're doing a distribution, your claim page is the
                        first experience your token community will have with
                        you. We create custom, full-swing experiences that will
                        wow your community and give you valuable time back
                        leading up to the big launch.
                      </motion.p>
                    </motion.div>
                  ) : textContent === "Swaps" ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7 },
                      }}
                      key={textContent}
                      exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                      <motion.h1 className="product-page-subheader">
                        Investors
                      </motion.h1>
                      <motion.p
                        style={{
                          fontSize: 27,
                          fontFamily: "proxima-nova-thin",
                        }}
                      >
                        4:4
                        <br></br>
                        Give your investors a magical interface to view, manage,
                        and interact with their locked tokens. No setup,
                        custodian compatible, full of features they'll be happy
                        they have.
                      </motion.p>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  ) : (
    /// MOBILE
    <motion.div
      style={{
        backgroundColor: "black",
        height: 3400,
      }}
    >
      <motion.div
        className="video"
        style={{
          width: "100%",
          height: "50vw",
          backgroundColor: "black",
          // opacity: 0.4,
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        //   layout
        transition={{ ease: "easeIn", duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{
            backgroundColor: "#EBE9EA",
            width: "90%",
            height: "90%",
            borderRadius: "2rem",
            border: "2px solid black",
          }}
        >
          <video
            // className="main-animation"
            src={mobileVideo}
            // width="50%"
            height="auto"
            // controls="controls"
            autoPlay="true"
            type="video/mov"
            loop
            muted
            className="mobile-animation"
          ></video>
        </motion.div>
      </motion.div>
      <motion.div className="product-text-content-mobile">
        <motion.div
          animate={{
            opacity: 1,
            y: -30,
            transition: { duration: 1 },
          }}
          initial={{ opacity: 0, y: 300 }}
          className="product-page-button-container"
        >
          <motion.button
            onClick={() => setTextContent("Vesting")}
            style={
              textContent === "Vesting"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Vesting
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Investor Lockups")}
            style={
              textContent === "Investor Lockups"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Investor Lockups
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Fundraising")}
            style={
              textContent === "Fundraising"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Fundraising
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Time-Locks")}
            style={
              textContent === "Time-Locks"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Time-Locks
          </motion.button>
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            exit: {
              opacity: 0,
              y: -300,
              transition: { duration: 0.5 },
            },
          }}
          initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
          style={{ width: "90vw", color: "white" }}
        >
          <motion.h1
            style={{
              fontSize: 35,
              fontFamily: "proxima-nova-extra-bold",
            }}
          >
            For live token treasuries
          </motion.h1>

          {textContent === "Vesting" ? (
            <motion.div
              className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                {textContent === "Vesting" ||
                textContent === "Investor Lockups" ||
                textContent === "Fundraising" ||
                textContent === "Time-Locks"
                  ? textContent
                  : "Vesting"}
                {/* {textContent} */}
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 1:2 */}
                <br></br>
                This is vesting the way it should be. On-chain, transperent, and
                full of risk-reducing features for your security, accounting,
                and full team needs.
              </motion.p>
            </motion.div>
          ) : textContent === "Investor Lockups" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="product-content-container"
            >
              <motion.h1 className="product-page-subheader-mobile">
                {textContent}
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 1:3 */}
                <br></br>
                Distributing tokens to your investors should be simple. We
                create secure, simple escrow contracts that let you distribute
                locked tokens in a way that's composible to their individual
                needs. Custodianship, governance rights, and more ready to go
                out of the box.
                <br></br>
              </motion.p>
            </motion.div>
          ) : textContent === "Fundraising" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              className={"product-content-container"}
            >
              <motion.h1 className="product-page-subheader-mobile">
                {textContent}
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 1:4 */}
                <br></br>
                Swap tokens using escrowless contracts built or on-chain teams.
                Add lockups, custom unlock schedules, governance rights and more
                - right out of the box.
              </motion.p>
            </motion.div>
          ) : textContent === "Time-Locks" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
            >
              <motion.h1 className="product-page-subheader-mobile">
                {textContent}
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 1:4 */}
                <br></br>
                Create a time-locked version of your token. This popular tool
                combines escrow contracts and locked-token NFTs to let teams do
                everything from distributing locked-tokens as compensation, to
                creating an incentive for holders to lock liquid tokens. Our
                weirdest and coolest product for live token communities.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                {textContent === "Vesting" ||
                textContent === "Investor Lockups" ||
                textContent === "Fundraising" ||
                textContent === "Time-Locks"
                  ? textContent
                  : "Vesting"}
                {/* {textContent} */}
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 1:2 */}
                <br></br>
                This is vesting the way it should be. On-chain, transperent, and
                full of risk-reducing features for your security, accounting,
                and full team needs.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className="video"
        style={{
          width: "100%",
          height: "50vw",
          backgroundColor: "black",
          // opacity: 0.4,
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        //   layout
        transition={{ ease: "easeIn", duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{
            backgroundColor: "#EBE9EA",
            width: "90%",
            height: "90%",
            borderRadius: "2rem",
            border: "2px solid black",
          }}
        >
          <video
            // className="main-animation"
            src={mobileVideo}
            // width="50%"
            height="auto"
            // controls="controls"
            autoPlay="true"
            type="video/mov"
            loop
            muted
            className="mobile-animation"
          ></video>
        </motion.div>
      </motion.div>
      <motion.div className="product-text-content-mobile">
        <motion.div
          animate={{
            opacity: 1,
            y: -30,
            transition: { duration: 1 },
          }}
          initial={{ opacity: 0, y: 300 }}
          className="product-page-button-container"
        >
          <motion.button
            onClick={() => setTextContent("Token Generation")}
            style={
              textContent === "Token Generation"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Token Generation
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Community Claims")}
            style={
              textContent === "Community Claims"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Community Claims
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Teams and Investors")}
            style={
              textContent === "Teams and Investors"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Teams and Investors
          </motion.button>
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            exit: {
              opacity: 0,
              y: -300,
              transition: { duration: 0.5 },
            },
          }}
          initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
          style={{ width: "90vw", color: "white" }}
        >
          <motion.h1
            style={{
              fontSize: 35,
              fontFamily: "proxima-nova-extra-bold",
            }}
          >
            For setting up your big token launch
          </motion.h1>

          {textContent === "Token Generation" ? (
            <motion.div
              className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Token Generation
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 2:2 */}
                <br></br>
                Token generation events set your course for the next 10 years.
                Get it right with bespoke vesting plans, custom lockups,
                governance, and the most complex token considerations baked-in
                on day one.
              </motion.p>
            </motion.div>
          ) : textContent === "Community Claims" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className={"product-content-container"}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Community Claims
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 2:3 */}
                <br></br>
                Community distributions are becoming more complex than ever.
                Create allocation strategies and custom claim pages to
                distribute your new token in a way everyone can get excited
                about.
              </motion.p>
            </motion.div>
          ) : textContent === "Teams and Investors" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              className="product-content-container"
            >
              <motion.h1 className="product-page-subheader-mobile">
                Teams and Investors
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 2:4 */}
                <br></br>
                Simple, on-chain vesting for the most complex team needs.
                Customizable cliffs, post-vesting lockups, unlock cadence,
                voting rights and more - all at your fingertips through our
                beautiful UIs.
              </motion.p>
            </motion.div>
          ) : textContent === "Time-Locks" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
            >
              <motion.h1 className="product-page-subheader-mobile">
                {textContent}
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 1:4 */}
                <br></br>
                Create a time-locked version of your token. This popular tool
                combines escrow contracts and locked-token NFTs to let teams do
                everything from distributing locked-tokens as compensation, to
                creating an incentive for holders to lock liquid tokens. Our
                weirdest and coolest product for live token communities.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Token Generation
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 2:2 */}
                <br></br>
                Token generation events set your course for the next 10 years.
                Get it right with bespoke vesting plans, custom lockups,
                governance, and the most complex token considerations baked-in
                on day one.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className="video"
        style={{
          width: "100%",
          height: "50vw",
          backgroundColor: "black",
          // opacity: 0.4,
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        //   layout
        transition={{ ease: "easeIn", duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "90%",
            borderRadius: "2rem",
            border: "2px solid black",
          }}
        ></motion.div>
      </motion.div>
      <motion.div className="product-text-content-mobile">
        <motion.div
          animate={{
            opacity: 1,
            y: -30,
            transition: { duration: 1 },
          }}
          initial={{ opacity: 0, y: 300 }}
          className="product-page-button-container"
        >
          <motion.button
            onClick={() => setTextContent("Pre-token")}
            style={
              textContent === "Pre-token"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Pre-Token
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Live Token")}
            style={
              textContent === "Live Token"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Live Tokens
          </motion.button>
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            exit: {
              opacity: 0,
              y: -300,
              transition: { duration: 0.5 },
            },
          }}
          initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
          style={{ width: "90vw", color: "white" }}
        >
          <motion.h1
            style={{
              fontSize: 35,
              fontFamily: "proxima-nova-extra-bold",
            }}
          >
            For doing your homework
          </motion.h1>

          {textContent === "Pre-token" ? (
            <motion.div
              className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Pre-Token
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 3:2 */}
                <br></br>
                Planning a token launch and have questions? We're pulling
                together a cohort of pre-token companies to share resources,
                networks, and more. Join season 1 to get free access.
              </motion.p>
            </motion.div>
          ) : textContent === "Live Token" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="product-content-container"
            >
              <motion.h1 className="product-page-subheader-mobile">
                Live Tokens
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 3:3 */}
                <br></br>
                Figuring out the best way to create a vesting plan, diversifying
                your native asset, or knock out something mission-critical for
                your treasury? We've got the network, people, and tools. Let's
                make it happen.
              </motion.p>
            </motion.div>
          ) : textContent === "Swaps" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Teams and Investors
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 2:4 */}
                <br></br>
                Simple, on-chain vesting for the most complex team needs.
                Customizable cliffs, post-vesting lockups, unlock cadence,
                voting rights and more - all at your fingertips through our
                beautiful UIs.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Pre-Token
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 3:2 */}
                <br></br>
                Planning a token launch and have questions? We're pulling
                together a cohort of pre-token companies to share resources,
                networks, and more. Join season 1 to get free access.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className="video"
        style={{
          width: "100%",
          height: "50vw",
          backgroundColor: "black",
          // opacity: 0.4,
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        //   layout
        transition={{ ease: "easeIn", duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "90%",
            borderRadius: "2rem",
            border: "2px solid black",
          }}
        ></motion.div>
      </motion.div>
      <motion.div className="product-text-content-mobile">
        <motion.div
          animate={{
            opacity: 1,
            y: -30,
            transition: { duration: 1 },
          }}
          initial={{ opacity: 0, y: 300 }}
          className="product-page-button-container"
        >
          <motion.button
            onClick={() => setTextContent("Vesting")}
            style={
              textContent === "Vesting"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Team
          </motion.button>
          <motion.button
            onClick={() => setTextContent("Distribution")}
            style={
              textContent === "Distribution"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Community
          </motion.button>
          b
          <motion.button
            onClick={() => setTextContent("Swaps")}
            style={
              textContent === "Swaps"
                ? {
                    border: "2px solid white",
                    transition: ".5s all ease-in-out",
                    backgroundColor: "white",
                    color: "#363636",
                  }
                : {
                    border: "2px solid grey",
                    transition: ".5s all ease-in-out",
                  }
            }
            className="complexSection-btn"
          >
            Investors
          </motion.button>
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
            exit: {
              opacity: 0,
              y: -300,
              transition: { duration: 0.5 },
            },
          }}
          initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
          style={{ width: "90vw", color: "white" }}
        >
          <motion.h1
            style={{
              fontSize: 35,
              fontFamily: "proxima-nova-extra-bold",
            }}
          >
            For your team, community, and investors.
          </motion.h1>

          {textContent === "Vesting" ? (
            <motion.div
              // className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="product-content-container"
            >
              <motion.h1
                className="product-page-subheader-mobile"
                style={{ fontSize: "10px" }}
              >
                Team
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 3:2 */}
                <br></br>
                Give your team access to beautiful UIs to view, manage, and
                interact with their vesting and locked tokens. Everything your
                team will want and more - right at their fingertips.
              </motion.p>
            </motion.div>
          ) : textContent === "Distribution" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="product-content-container"
            >
              <motion.h1 className="product-page-subheader-mobile">
                Community
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 3:3 */}
                <br></br>
                If you're doing a distribution, your claim page is the first
                experience your token community will have with you. We create
                custom, full-swing experiences that will wow your community and
                give you valuable time back leading up to the big launch.
              </motion.p>
            </motion.div>
          ) : textContent === "Swaps" ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              className="product-content-container"
              style={{ height: "400px" }}
            >
              <motion.h1 className="product-page-subheader-mobile">
                Investors
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 2:4 */}
                <br></br>
                Give your investors a magical interface to view, manage, and
                interact with their locked tokens. No setup, custodian
                compatible, full of features they'll be happy they have.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              // className="product-content-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              }}
              key={textContent}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="product-content-container"
            >
              <motion.h1 className="product-page-subheader-mobile">
                Team
              </motion.h1>
              <motion.p
                style={{
                  fontSize: 27,
                  fontFamily: "proxima-nova-thin",
                }}
              >
                {/* 3:2 */}
                <br></br>
                Give your team access to beautiful UIs to view, manage, and
                interact with their vesting and locked tokens. Everything your
                team will want and more - right at their fingertips.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
  // <motion.div
  //   ref={ref}
  //   style={{
  //     background: "black",
  //     position: "relative",
  //     height: "4500px",
  //     display: "flex",
  //     justifyContent: "left",
  //     ...(scroll < 0.20
  //       ? { alignItems: "start" }
  //       : scroll > 0.667
  //       ? { alignItems: "end" }
  //       : null),
  //   }}
  // >
  //   <p style={{ position: "fixed", top: 50, right: 20, color: "white" }}>
  //     {scroll}
  //     <br></br>
  //     {position}
  //     <br></br>
  //     {screenWidth}
  //   </p>
  //   <motion.div>
  //     <motion.div
  //       className="video"
  //       style={{
  //         height: "100vh",
  //         width: "50vw",
  //         backgroundColor: "black",
  //         // opacity: 0.4,
  //         border: "none",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",

  //         position: scroll < 0.20 || scroll > 0.667 ? "relative" : "fixed",
  //         ...(scroll < 0.20 || scroll > 0.667
  //           ? {}
  //           : { top: "0px", left: "0px" }),
  //       }}
  //       //   layout
  //       transition={{ ease: "easeIn", duration: 0.1 }}
  //       exit={{ opacity: 0 }}
  //     >
  //       <motion.div
  //         style={{
  //           backgroundColor: "white",
  //           width: "90%",
  //           height: "90%",
  //           borderRadius: "2rem",
  //           border: "2px solid black",
  //         }}
  //       ></motion.div>
  //     </motion.div>
  //   </motion.div>

  //   <motion.div>
  //     {scroll > 0.20 && scroll < 0.667 && (
  //       <motion.div
  //         style={{
  //           color: "white",
  //           position: "fixed",
  //           bottom: "40vh",
  //           right: "1vw",
  //           //   backgroundColor: "red",
  //         }}
  //         // animate={{
  //         //   opacity: 1,
  //         //   y: 0,
  //         //   transition: { duration: 1 },
  //         // }}
  //         // initial={{ opacity: 0, y: 0 }}
  //         // exit={{ opacity: 0 }}
  //       >
  //         {scroll < 0.2397 ? (
  //           <motion.div style={{ width: "50vw" }}>
  //             <motion.div
  //               className="product-page-button-container"
  //               animate={{
  //                 opacity: 1,
  //                 y: -30,
  //                 transition: { duration: 1 },
  //               }}
  //               initial={{ opacity: 0, y: -300 }}
  //             >
  //               <motion.button
  //                 onClick={() => setTextContent("Vesting")}
  //                 style={
  //                   textContent === "Vesting"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Vesting
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Distribution")}
  //                 style={
  //                   textContent === "Distribution"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Investor Lockups
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Swaps")}
  //                 style={
  //                   textContent === "Swaps"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Swaps
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Time-Locks")}
  //                 style={
  //                   textContent === "Time-Locks"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Time-Locks
  //               </motion.button>
  //             </motion.div>
  //             <motion.div
  //               animate={{
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: { duration: 1 },
  //                 exit: {
  //                   opacity: 0,
  //                   y: -300,
  //                   transition: { duration: 0.5 },
  //                 },
  //               }}
  //               initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
  //               style={{ width: "45vw" }}
  //               className={"product-content-container"}
  //               key={position}
  //             >
  //               <motion.h1
  //                 style={{
  //                   fontSize: 44,
  //                   fontFamily: "proxima-nova-extra-bold",
  //                 }}
  //               >
  //                 1: For live token treasuries
  //               </motion.h1>

  //               {/* {textContent === "" ? (
  //                 <motion.div
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 1 },
  //                     exit: {
  //                       opacity: 0,
  //                       y: -300,
  //                       transition: { duration: 0.5 },
  //                     },
  //                   }}
  //                   initial={{
  //                     opacity: 0,
  //                     y: 300,
  //                     transition: { duration: 1 },
  //                   }}
  //                   style={{
  //                     fontFamily: "proxima-nova-thin",
  //                     fontSize: 27,
  //                   }}
  //                   key={textContent}
  //                 >
  //                   <motion.p>
  //                     1:1
  //                     <br></br>
  //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  //                     sed do eiusmod tempor incididunt ut labore et dolore
  //                     magna aliqua. Ut enim ad minim veniam, quis nostrud
  //                     exercitation
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )} */}

  //               {textContent === "Vesting" ? (
  //                 <motion.div
  //                   className="product-content-container"
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     {textContent}
  //                   </motion.h1>
  //                   <motion.p
  //                     // animate={{
  //                     //   opacity: 1,
  //                     //   y: 0,
  //                     //   transition: { duration: 1 },
  //                     //   exit: {
  //                     //     opacity: 0,
  //                     //     y: -300,
  //                     //     transition: { duration: 0.5 },
  //                     //   },
  //                     // }}
  //                     // initial={{
  //                     //   opacity: 0,
  //                     //   y: 50,
  //                     //   transition: { duration: 1 },
  //                     // }}
  //                     // key={textContent}
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     1:2
  //                     <br></br>
  //                     This is vesting the way it should be. On-chain,
  //                     transperent, and full of risk-reducing features for your
  //                     security, accounting, and full team needs.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Distribution" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     {textContent}
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     1:3
  //                     <br></br>
  //                     Distributing tokens to your investors should be simple.
  //                     We create secure, simple escrow contracts that let you
  //                     distribute locked tokens in a way that's composible to
  //                     their individual needs. Custodianship, governance
  //                     rights, and more ready to go out of the box.
  //                     <br></br>
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Swaps" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     {textContent}
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     1:4
  //                     <br></br>
  //                     Swap tokens using escrowless contracts built or on-chain
  //                     teams. Add lockups, custom unlock schedules, governance
  //                     rights and more - right out of the box.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Time-Locks" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     {textContent}
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     1:4
  //                     <br></br>
  //                     Create a time-locked version of your token. This popular
  //                     tool combines escrow contracts and locked-token NFTs to
  //                     let teams do everything from distributing locked-tokens
  //                     as compensation, to creating an incentive for holders to
  //                     lock liquid tokens. Our weirdest and coolest product for
  //                     live token communities.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )}
  //             </motion.div>
  //           </motion.div>
  //         ) : scroll > 0.2397 && scroll < 0.335 ? (
  //           <motion.div style={{ width: "50vw" }}>
  //             <motion.div
  //               className="product-page-button-container"
  //               // animate={{
  //               //   opacity: 1,
  //               //   y: -30,
  //               //   transition: { duration: 1 },
  //               // }}
  //               // initial={{ opacity: 0, y: -300 }}
  //             >
  //               <motion.button
  //                 onClick={() => setTextContent("Vesting")}
  //                 style={
  //                   textContent === "Vesting"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Token Generation
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Distribution")}
  //                 style={
  //                   textContent === "Distribution"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Community Claims
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Swaps")}
  //                 style={
  //                   textContent === "Swaps"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Teams and Investors
  //               </motion.button>
  //             </motion.div>
  //             <motion.div
  //               // animate={{
  //               //   opacity: 1,
  //               //   y: 0,
  //               //   transition: { duration: 1 },
  //               //   exit: {
  //               //     opacity: 0,
  //               //     y: -300,
  //               //     transition: { duration: 0.5 },
  //               //   },
  //               // }}
  //               // initial={{ opacity: 0, y: 300, transition: { duration: 1 } }}
  //               // style={{ width: "45vw" }}
  //               className={"product-content-container"}
  //               key={position}
  //               animate={{
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: { duration: 1 },
  //               }}
  //               initial={{ opacity: 0, y: 300 }}
  //               // exit={{ opacity: 0 }}
  //               // style={{ width: "45vw" }}
  //             >
  //               <motion.h1
  //                 style={{
  //                   fontSize: 44,
  //                   fontFamily: "proxima-nova-extra-bold",
  //                 }}
  //               >
  //                 2: For setting up your big token launch
  //               </motion.h1>

  //               {/* {textContent === "" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.p
  //                     style={{
  //                       fontFamily: "proxima-nova-thin",
  //                       fontSize: 27,
  //                     }}
  //                   >
  //                     2:1
  //                     <br></br>
  //                     DAOs are the future of human organization. We create
  //                     financial infrastructure for DAO treasuries to help them
  //                     diversify assets, alleviate contributor sell pressure,
  //                     and prosper through DAO to DAO swaps.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )} */}

  //               {textContent === "Vesting" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Token Generation
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     2:2
  //                     <br></br>
  //                     Token generation events set your course for the next 10
  //                     years. Get it right with bespoke vesting plans, custom
  //                     lockups, governance, and the most complex token
  //                     considerations baked-in on day one.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Distribution" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Community Claims
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     2:3
  //                     <br></br>
  //                     Community distributions are becoming more complex than
  //                     ever. Create allocation strategies and custom claim
  //                     pages to distribute your new token in a way everyone can
  //                     get excited about.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Swaps" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Teams and Investors
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     2:4
  //                     <br></br>
  //                     Simple, on-chain vesting for the most complex team
  //                     needs. Customizable cliffs, post-vesting lockups, unlock
  //                     cadence, voting rights and more - all at your fingertips
  //                     through our beautiful UIs.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )}
  //             </motion.div>
  //           </motion.div>
  //         ) : scroll > 0.335 && scroll < 0.4305 ? (
  //           <motion.div style={{ width: "50vw" }}>
  //             <motion.div
  //               className="product-page-button-container"

  //               // animate={{
  //               //   opacity: 1,
  //               //   y: -30,
  //               //   transition: { duration: 1 },
  //               // }}
  //               // initial={{ opacity: 0, y: -300 }}
  //             >
  //               <motion.button
  //                 onClick={() => setTextContent("Vesting")}
  //                 style={
  //                   textContent === "Vesting"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Pre-token
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Distribution")}
  //                 style={
  //                   textContent === "Distribution"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Live Tokens
  //               </motion.button>
  //               {/* <motion.button
  //                 onClick={() => setTextContent("Swaps")}
  //                 style={
  //                   textContent === "Swaps"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Swaps
  //               </motion.button> */}
  //             </motion.div>
  //             <motion.div
  //               className={"product-content-container"}
  //               key={position}
  //               animate={{
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: { duration: 1 },
  //               }}
  //               initial={{ opacity: 0, y: 300 }}
  //               style={{ width: "45vw" }}
  //               exit={{ opacity: 0 }}
  //             >
  //               <motion.h1
  //                 style={{
  //                   fontSize: 44,
  //                   fontFamily: "proxima-nova-extra-bold",
  //                 }}
  //               >
  //                 3: For doing your homework
  //               </motion.h1>

  //               {/* {textContent === "" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.p
  //                     style={{
  //                       fontFamily: "proxima-nova-thin",
  //                       fontSize: 27,
  //                     }}
  //                   >
  //                     3:1
  //                     <br></br>
  //                     DAOs are the future of human organization. We create
  //                     financial infrastructure for DAO treasuries to help them
  //                     diversify assets, alleviate contributor sell pressure,
  //                     and prosper through DAO to DAO swaps.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )} */}

  //               {textContent === "Vesting" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Pre-token
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     3:2
  //                     <br></br>
  //                     Planning a token launch and have questions? We're
  //                     pulling together a cohort of pre-token companies to
  //                     share resources, networks, and more. Join season 1 to
  //                     get free access.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Distribution" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Live Tokens
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     3:3
  //                     <br></br>
  //                     Figuring out the best way to create a vesting plan,
  //                     diversifying your native asset, or knock out something
  //                     mission-critical for your treasury? We've got the
  //                     network, people, and tools. Let's make it happen.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Swaps" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     {textContent}
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     3:4
  //                     <br></br>
  //                     swaps content swaps content swaps content
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )}
  //             </motion.div>
  //           </motion.div>
  //         ) : (
  //           <motion.div style={{ width: "50vw" }}>
  //             <motion.div
  //               className="product-page-button-container"
  //               // animate={{
  //               //   opacity: 1,
  //               //   y: -30,
  //               //   transition: { duration: 1 },
  //               // }}
  //               // initial={{ opacity: 0, y: -300 }}
  //             >
  //               <motion.button
  //                 onClick={() => setTextContent("Vesting")}
  //                 style={
  //                   textContent === "Vesting"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Team
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Distribution")}
  //                 style={
  //                   textContent === "Distribution"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Community
  //               </motion.button>
  //               <motion.button
  //                 onClick={() => setTextContent("Swaps")}
  //                 style={
  //                   textContent === "Swaps"
  //                     ? {
  //                         border: "2px solid white",
  //                         transition: ".5s all ease-in-out",
  //                         backgroundColor: "white",
  //                         color: "#363636",
  //                       }
  //                     : {
  //                         border: "2px solid grey",
  //                         transition: ".5s all ease-in-out",
  //                       }
  //                 }
  //                 className="complexSection-btn"
  //               >
  //                 Investors
  //               </motion.button>
  //             </motion.div>
  //             <motion.div
  //               className="product-content-container"
  //               key={position}
  //               animate={{
  //                 opacity: 1,
  //                 y: 0,
  //                 transition: { duration: 1 },
  //               }}
  //               initial={{ opacity: 0, y: 300 }}
  //               style={{ width: "45vw" }}
  //               exit={{ opacity: 0 }}
  //               // animate={{
  //               //   opacity: 1,
  //               //   y: 0,
  //               //   transition: { duration: 1 },
  //               // }}
  //               // initial={{ opacity: 0, y: 300 }}
  //               // style={{ width: "45vw" }}
  //             >
  //               <motion.h1
  //                 style={{
  //                   fontSize: 44,
  //                   fontFamily: "proxima-nova-extra-bold",
  //                 }}
  //               >
  //                 4: For doing your homework
  //               </motion.h1>

  //               {textContent === "" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.p
  //                     style={{
  //                       fontFamily: "proxima-nova-thin",
  //                       fontSize: 27,
  //                     }}
  //                   >
  //                     4:1
  //                     <br></br>
  //                     DAOs are the future of human organization. We create
  //                     financial infrastructure for DAO treasuries to help them
  //                     diversify assets, alleviate contributor sell pressure,
  //                     and prosper through DAO to DAO swaps.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )}

  //               {textContent === "Vesting" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Team
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     4:2
  //                     <br></br>
  //                     Give your team access to beautiful UIs to view, manage,
  //                     and interact with their vesting and locked tokens.
  //                     Everything your team will want and more - right at their
  //                     fingertips.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Distribution" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Community
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     4:3
  //                     <br></br>
  //                     If you're doing a distribution, your claim page is the
  //                     first experience your token community will have with
  //                     you. We create custom, full-swing experiences that will
  //                     wow your community and give you valuable time back
  //                     leading up to the big launch.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : textContent === "Swaps" ? (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{
  //                     opacity: 1,
  //                     y: 0,
  //                     transition: { duration: 0.7 },
  //                   }}
  //                   key={textContent}
  //                   exit={{ opacity: 0, transition: { duration: 1 } }}
  //                 >
  //                   <motion.h1 className="product-page-subheader">
  //                     Investors
  //                   </motion.h1>
  //                   <motion.p
  //                     style={{
  //                       fontSize: 27,
  //                       fontFamily: "proxima-nova-thin",
  //                     }}
  //                   >
  //                     4:4
  //                     <br></br>
  //                     Give your investors a magical interface to view, manage,
  //                     and interact with their locked tokens. No setup,
  //                     custodian compatible, full of features they'll be happy
  //                     they have.
  //                   </motion.p>
  //                 </motion.div>
  //               ) : (
  //                 ""
  //               )}
  //             </motion.div>
  //           </motion.div>
  //         )}
  //       </motion.div>
  //     )}
  //   </motion.div>
  // </motion.div>
};

export default ComplexSection;
