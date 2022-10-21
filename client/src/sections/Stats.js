import React from "react";
import "../css/Stats.css";
import { stats } from "../data";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  return (
    <div className="statsContainer" ref={ref}>
      <div className="statsInnerContainer">
        <Fade bottom cascade when={inView}>
          <div className="statsTitleContainer">
            <p className="statsTitle">Trusted by users from around the world</p>
            <p className="statsDescription">
              Don't believe us? Look at these statistics!
            </p>
          </div>
          <div className="stats">
            {stats.map((s, i) => {
              return (
                <div className="stat" key={i}>
                  <p className="statTitle">{s.stat}</p>
                  <p className="statDescription">{s.description}</p>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Stats;
