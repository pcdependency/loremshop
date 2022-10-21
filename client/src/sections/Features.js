import React from "react";
import "../css/Features.css";
import { features } from "../data";
import { SvgIcon } from "@mui/material";
import { useInView } from "react-intersection-observer";

const featureIconStyle = {
  height: "60px",
  width: "60px",
  color: "white",
  backgroundColor: "#428ea1",
  padding: "15px",
  borderRadius: "5px",
  boxShadow: "0 0 20px rgba(0,0,0,.2)",
};

const Features = ({ setInView }) => {
  const { ref } = useInView({
    onChange: (iV) => setInView("features", iV),
    threshold: 0.7,
  });

  return (
    <div className="featuresContainer" id="featuresContainer" ref={ref}>
      <div className="featuresInnerContainer">
        <div className="sectionTitleContainer">
          <p className="sectionTitle">features</p>
          <p className="sectionDescription">Here's What We Have To Offer</p>
        </div>
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
      </div>
    </div>
  );
};

export default Features;
