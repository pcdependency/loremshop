import React from "react";
import "../css/Stats.css";
import { stats } from "../data";

const Stats = () => {
  return (
    <div className="statsContainer">
      <div className="statsInnerContainer">
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
      </div>
    </div>
  );
};

export default Stats;
