import React from "react";
import "../css/Pricing.css";
import { plans, features } from "../data";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";

const planCheckIconStyle = {
  height: "25px",
  width: "25px",
  fill: "#428ea1",
};

const Pricing = ({ setInView, width }) => {
  const lte1000 = width <= 1000;

  const { ref, inView } = useInView({
    onChange: (iV) => setInView("pricing", iV),
    threshold: lte1000 ? 0 : 0.7,
  });

  return (
    <div className="pricingContainer" id="pricingContainer" ref={ref}>
      <div className="pricingInnerContainer">
        <div className="sectionTitleContainer">
          <p className="sectionTitle">pricing</p>
          <p className="sectionDescription">
            Choose the best plan that fits your needs.
          </p>
          <p className="sectionNotify">
            Choose the best plan that fits your needs.
          </p>
        </div>
        <Fade top cascade distance="10%" when={inView}>
          <div className="plans">
            {plans.map((p, i) => {
              return (
                <div className="plan" key={i}>
                  <p className="planTime">
                    {p.plan}
                    <span className="planHint"> ({p.hint})</span>
                  </p>
                  <p className="planDescription">{p.description}</p>
                  <p className="planPrice">
                    {p.unit}
                    {p.price}
                    <span className="planShort"> /{p.short}</span>
                  </p>
                  <button
                    className="planPurchaseBtn"
                    data-sellix-product={p.id}
                    type="submit"
                    alt="Buy Now with sellix.io"
                  >
                    Purchase
                  </button>
                  <div className="planFeaturesContainer">
                    <p className="planFeatureTitle">What's Included</p>
                    <div className="planFeatures">
                      {features.map((f, i) => {
                        return (
                          <div className="planFeatureContainer" key={i}>
                            <TaskAltIcon style={planCheckIconStyle} />
                            <p className="planFeature">{f.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Pricing;
