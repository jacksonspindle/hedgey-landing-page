import Nav from "./components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
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
import "../src/styles/readmore.css";
// import Hero from "./components/Hero";
// import Hero5 from "./components/Hero5";
// import Footer from "./components/Footer";
// import Testimonial from "./components/Testimonial";
// import FAQ from "./components/FAQ";
// import ComplexSection from "./components/complexSection";
// import Marquee from "./components/Marquee";
// import ReadMore from "./components/ReadMore";
// import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <Nav />
      {location.pathname === "/" ? <Home /> : null}
      {location.pathname === "/product" ? <ProductPage /> : null}
      <Footer />

      <Routes>
        <Route path="/pre-token" element={<Nav />}></Route>
        <Route path="/drops" element={""}></Route>
        <Route path="/careers" element={""}></Route>
        <Route path="/login" element={""}></Route>
        <Route path="/get-started" element={""}></Route>
        <Route path="/product" element={""}></Route>
      </Routes>
    </div>
  );
}

export default App;
