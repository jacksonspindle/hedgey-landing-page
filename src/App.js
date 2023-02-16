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
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import ScrollHero from "./components/ScrollHero";
import Footer from "./components/Footer";
import AnimatedTitle from "./components/AnimatedTitle";
import Hero6 from "./components/Hero6";
import FixedDiv from "./components/FixedDiv";
import Partners from "./components/Partners";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import ComplexSection from "./components/complexSection";

function App() {
  return (
    <div>
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
      <Testimonial />
      <CallToAction />
      {/* <ScrollHero /> */}
      {/* <AnimatedTitle text={"this is a test"} /> */}
      <Hero4 />
      {/* <Hero5 /> */}
      <FAQ />
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
