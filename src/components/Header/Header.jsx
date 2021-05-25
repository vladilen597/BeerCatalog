import React from "react";
import "./Header.css";
import navIcon from "../../constants/resourses/pictures/picturesImport.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header-tagline">
        <nav className="menu-button">
          <img className="menu-button-image" src={navIcon} />
        </nav>
        Beer catalog
      </div>
      <div className="more-button">...</div>
    </header>
  );
};

export default Header;
