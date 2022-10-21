import React from "react";
import "../css/Prompt.css";
import { Link } from "react-scroll";

const Prompt = () => {
  return (
    <div className="promptContainer">
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
    </div>
  );
};

export default Prompt;
