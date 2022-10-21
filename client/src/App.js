import React, { useEffect, useRef, useState } from "react";
import "./css/App.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Stats from "./sections/Stats";
import Pricing from "./sections/Pricing";
import Prompt from "./sections/Prompt";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import TOS from "./sections/TOS";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [inView, setInView] = useState({
    home: false,
    features: false,
    pricing: false,
    questions: false,
  });
  const [scrollPos, setScrollPos] = useState(0);
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPos(window.pageYOffset));
  });

  function SetInView(name, value) {
    setInView((pS) => ({ ...pS, [name]: value }));
  }

  return (
    <div className="app" ref={ref}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav scrollPos={scrollPos} inView={inView} l={true} />
              <Hero setInView={SetInView} />
              <Features setInView={SetInView} />
              <Stats />
              <Pricing setInView={SetInView} />
              <Prompt />
              <FAQ setInView={SetInView} />
              <Footer />
            </>
          }
        />
        <Route
          path="/tos"
          element={
            <>
              <Nav scrollPos={scrollPos} inView={inView} l={false} />
              <TOS />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
