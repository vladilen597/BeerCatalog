import React, { useState, useEffect } from "react";
import "./Header.scss";
import { navIcon } from "../../constants/pictures/picturesImport.jsx";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";

import {
  homepageIcon,
  favouritesIcon,
} from "../../constants/pictures/picturesImport.jsx";

import headerResourses from "../../constants/resources/headerResources.jsx";
import routes from "../../constants/resources/routes.jsx";

const Header = React.memo(() => {
  const [left, setLeft] = useState(false);

  const toggleDrawer = (open) => () => {
    setLeft(open);
  };

  return (
    <header className="header">
      <Drawer open={left} onClose={toggleDrawer(false)} className="drawer">
        <div className="drawer-links">
          <h2>{headerResourses.header}</h2>
          <div className="links">
            <NavLink
              exact
              to={routes.main}
              className="home-link"
              activeClassName="active"
              onClick={toggleDrawer(false)}
            >
              <img src={homepageIcon} /> {headerResourses.homeLink}
            </NavLink>
            <NavLink
              to={routes.favourites}
              className="favourites-link"
              activeClassName="active"
              onClick={toggleDrawer(false)}
            >
              <img src={favouritesIcon} /> {headerResourses.favouritesLink}
            </NavLink>
          </div>
        </div>
      </Drawer>
      <nav className="header-tagline">
        <nav className="menu-button" onClick={toggleDrawer(true)}>
          <img className="menu-button-image" src={navIcon} />
        </nav>
        {headerResourses.header}
      </nav>
      <div className="more-button">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </header>
  );
});

export default Header;
