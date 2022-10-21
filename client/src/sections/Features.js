import React from "react";
import "../css/Features.css";
import { features } from "../data";
import { SvgIcon } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";

const featureIconStyle = {
  height: "60px",
  width: "60px",
  color: "white",
  backgroundColor: "#428ea1",
  padding: "15px",
  borderRadius: "5px",
  boxShadow: "0 0 20px rgba(0,0,0,.2)",
};

const Features = ({ setInView, width }) => {
  const lte1000 = width <= 1000;
  const { ref, inView } = useInView({
    onChange: (iV) => setInView("features", iV),
    threshold: lte1000 ? 0 : 0.7,
  });

  return (
    <div className="featuresContainer" id="featuresContainer" ref={ref}>
      <div className="featuresInnerContainer">
        <div className="sectionTitleContainer">
          <p className="sectionTitle">features</p>
          <p className="sectionDescription">Here's What We Have To Offer</p>
        </div>
        <Fade bottom cascade distance="20%" when={inView}>
          <div className="features">
            {features.map((f, i) => {
              return (
                <div key={i} className="feature">
                  <SvgIcon component={f.icon} style={featureIconStyle} />
                  <p className="featureTitle">{f.title}</p>
                  <p className="featureDescription">{f.description}</p>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Features;
