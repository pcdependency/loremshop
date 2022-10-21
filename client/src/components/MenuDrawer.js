import React, { useState } from "react";
import "../css/Menu.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { navLinks } from "../data";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";
import { useLocation } from "react-router-dom";
const menuStyle = {
  "& .MuiPaper-root": {
    width: "100%",
    transition: "ease-in-out .3s",
    backgroundColor: "#2b3034",
  },

  "& .MuiButtonBase-root": {
    fontWeight: "bold",
    fontSize: "12px",
  },
};
const MenuDrawer = ({ gte100, inView }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        className="three col"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <div
          className={`hamburger${open ? " is-active" : ""}`}
          id="hamburger-1"
        >
          <span className={`line${gte100 ? "" : " dark"}`}></span>
          <span className={`line${gte100 ? "" : " dark"}`}></span>
          <span className={`line${gte100 ? "" : " dark"}`}></span>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={menuStyle}
      >
        {location.pathname !== "/tos" ? (
          navLinks.map((l, i) => {
            return (
              <div key={i}>
                {l.to && (
                  <Link to={l.to} smooth duration={500}>
                    <MenuItem
                      sx={{
                        color:
                          location.pathname !== "/tos" &&
                          inView[l.link.toLocaleLowerCase()]
                            ? "#428ea1"
                            : "#bbbbbb",
                      }}
                    >
                      {l.link}
                    </MenuItem>
                  </Link>
                )}

                {!l.to && !l.newTab && (
                  <L to={l.path}>
                    <MenuItem
                      sx={{
                        color:
                          location.pathname === "/tos" ||
                          inView[l.link.toLocaleLowerCase()]
                            ? "#428ea1"
                            : "#bbbbbb",
                      }}
                    >
                      {l.link}
                    </MenuItem>
                  </L>
                )}

                {l.path && l.newTab && (
                  <a target="_blank" rel="noopener noreferrer" href={l.path}>
                    <MenuItem
                      sx={{
                        color: inView[l.link.toLocaleLowerCase()]
                          ? "#428ea1"
                          : "#bbbbbb",
                      }}
                    >
                      {l.link}
                    </MenuItem>
                  </a>
                )}
              </div>
            );
          })
        ) : (
          <L to="/" style={{ color: "#bbbbbb" }}>
            <MenuItem>Home</MenuItem>
          </L>
        )}
      </Menu>
    </>
  );
};

export default MenuDrawer;
