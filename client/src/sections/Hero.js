import React from "react";
import "../css/Hero.css";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Hero = ({ setInView }) => {
  const { ref } = useInView({
    onChange: (iV) => setInView("home", iV),

    threshold: 0.5,
  });

  return (
    <div className="heroContainer" id="heroContainer" ref={ref}>
      <div className="heroInnerContainer">
        <div className="leftHeroContainer">
          <p className="heroTitle">Adverse</p>
          <p className="heroDescription">
            Adverse is an advanced Rust script developed with quality in mind.
          </p>
          <Link to="pricingContainer" smooth duration={500}>
            <button className="button black large">Get Started</button>
          </Link>
        </div>
        <div className="rightHeroContainer">
          <div className="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
