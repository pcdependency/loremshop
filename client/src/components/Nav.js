import React from "react";
import "../css/Nav.css";
import { navLinks as links } from "../data";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";

const Nav = ({ scrollPos, inView, l }) => {
  const gte100 = scrollPos >= 100;

  return (
    <div className={`navContainer${gte100 ? " scroll" : ""}`}>
      <div className="navInnerContainer">
        <div className="logoContainer">
          <L to="/" className={`logoTitle${gte100 ? " blue" : ""}`}>
            lorem
          </L>
        </div>
        <div className={`navLinksContainer${l ? "" : " hide"}`}>
          {links.map((l, i) => {
            return (
              <div key={i}>
                {l.to && (
                  <Link
                    to={l.to}
                    smooth
                    duration={500}
                    className="navLink"
                    style={{
                      transition: "ease-in-out .3s",
                      color:
                        gte100 && inView[l.link.toLocaleLowerCase()]
                          ? "#428ea1"
                          : "white",
                    }}
                  >
                    {l.link}
                  </Link>
                )}

                {!l.to && !l.newTab && (
                  <L to={l.path} className="navLink">
                    {l.link}
                  </L>
                )}

                {l.newTab && (
                  <a
                    href={l.path}
                    className="navLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.link}
                  </a>
                )}
              </div>
            );
          })}
        </div>
        <div className="navMenuContainer">
          <MenuDrawer gte100={gte100} inView={inView} />
        </div>
        <div className="navButtonContainer">
          {l ? (
            <Link to="pricingContainer" smooth duration={500}>
              <button
                className={
                  gte100 ? "button large blue" : "button large white clear"
                }
                type="button"
              >
                Get Started
              </button>
            </Link>
          ) : (
            <L to="/">
              <button
                className={
                  gte100 ? "button large blue" : "button large white clear"
                }
                type="button"
              >
                Get Started
              </button>
            </L>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
