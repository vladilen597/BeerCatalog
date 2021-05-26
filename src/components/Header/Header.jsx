import React, { Component } from "react";
import "./Header.css";
import { navIcon } from "../../constants/resourses/pictures/picturesImport.jsx";
import Drawer from "@material-ui/core/Drawer";
import { Link, NavLink } from "react-router-dom";

import {
  homepageIcon,
  favouritesIcon,
} from "../../constants/resourses/pictures/picturesImport.jsx";

class Header extends Component {
  state = { left: false };

  toggleDrawer = (open) => () => {
    this.setState({ left: open });
  };

  render() {
    return (
      <header className="header">
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
          className="drawer"
        >
          <div className="drawer-links">
            <h2>Beer Catalog</h2>
            <div className="links">
              <NavLink
                exact
                to="/"
                className="home-link"
                activeClassName="active"
                onClick={this.toggleDrawer(false)}
              >
                <img src={homepageIcon} /> Home
              </NavLink>
              <NavLink
                to="/favourite"
                className="favourites-link"
                activeClassName="active"
                onClick={this.toggleDrawer(false)}
              >
                <img src={favouritesIcon} /> Favourites
              </NavLink>
            </div>
          </div>
        </Drawer>
        <nav className="header-tagline">
          <nav className="menu-button" onClick={this.toggleDrawer(true)}>
            <img className="menu-button-image" src={navIcon} />
          </nav>
          Beer catalog
        </nav>
        <div className="more-button">...</div>
      </header>
    );
  }
}

export default Header;
