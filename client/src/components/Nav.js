import React from "react";
import "../css/Nav.css";
import { navLinks as links } from "../data";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";

const navMenuStyle = {
  height: "34px",
  width: "34px",
};

const Nav = ({ scrollPos, inView, l }) => {
  const gte100 = scrollPos >= 100;

  return (
    <div className={`navContainer${gte100 ? " scroll" : ""}`}>
      <div className="navInnerContainer">
        <div className="logoContainer">
          <L to="/" className={`logoTitle${gte100 ? " blue" : ""}`}>
            adverse
          </L>
        </div>
        <div className={`navLinksContainer${l ? "" : " hide"}`}>
          {links.map((l, i) => {
            return (
              <>
                {l.to && (
                  <Link
                    to={l.to}
                    key={i}
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
                  <L key={i} to={l.path} className="navLink">
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
              </>
            );
          })}
        </div>
        <div className="navMenuContainer">
          <MenuIcon style={navMenuStyle} />
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
