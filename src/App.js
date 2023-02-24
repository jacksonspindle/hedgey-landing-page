import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import "../src/styles/nav.css";
import "../src/styles/hero.css";
import "../src/styles/hero2.css";
import "../src/styles/hero3.css";
import "../src/styles/hero4.css";
import "../src/styles/hero5.css";
import "../src/styles/hero6.css";
import "../src/styles/footer.css";
import "../src/styles/main.css";
import "../src/styles/faq.css";
import "../src/styles/twitterFeed.css";
import "../src/styles/complexSection.css";
import "../src/styles/testimonial.css";
import "../src/styles/partners.css";
import "../src/styles/marquee.css";
import "../src/styles/help.css";
import Hero from "./components/Hero";
import Hero5 from "./components/Hero5";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import ComplexSection from "./components/complexSection";
import Marquee from "./components/Marquee";
import Help from "./components/Help";

function App() {
  return (
    <div>
      {/* <Nav1 /> */}
      <Nav />

      <Hero />

      <Hero5 />
      {/* <Partners /> */}
      {/* <Intro /> */}
      {/* <Hero2 /> */}

      {/* <Hero3 /> */}

      {/* <Hero6 /> */}
      <ComplexSection />
      {/* <Twitter /> */}
      {/* <TwitterFeed /> */}
      <Marquee />

      <Testimonial />
      <Help />
      <FAQ />
      <CallToAction />
      {/* <ScrollHero /> */}
      {/* <AnimatedTitle text={"this is a test"} /> */}
      {/* <Hero4 /> */}
      {/* <Hero5 /> */}

      <Footer />

      <Routes>
        <Route path="/pre-token" element={<Nav />}></Route>
        <Route path="/drops" element={""}></Route>
        <Route path="/careers" element={""}></Route>
        <Route path="/login" element={""}></Route>
        <Route path="/get-started" element={""}></Route>
      </Routes>
    </div>
  );
}

export default App;
