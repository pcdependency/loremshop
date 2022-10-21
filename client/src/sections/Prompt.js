import React from "react";
import "../css/Prompt.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";

const Prompt = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <div className="promptContainer" ref={ref}>
      <Fade bottom cascade when={inView}>
        <div className="promptInnerContainer">
          <p className="promptTitle">What are you waiting for?</p>
          <p className="promptDescription">
            Enhance your Rust scripting experience with Adverse now.
          </p>
          <Link to="pricingContainer" smooth duration={500}>
            <button type="button" className="button white tblue large whover">
              Get Started
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Prompt;
