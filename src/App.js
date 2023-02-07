import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import "../src/styles/nav.css";
import "../src/styles/hero.css";
import "../src/styles/hero2.css";
import "../src/styles/hero3.css";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Hero2 />
      <Hero3 />

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
