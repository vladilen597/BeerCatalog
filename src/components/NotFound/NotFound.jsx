import React from "react";
import { Link } from "react-router-dom";
import { nobeerPicture } from "../../constants/pictures/picturesImport.jsx";
import notFoundResources from "../../constants/resources/notFoundResources.jsx";
import routes from "../../constants/resources/routes.jsx";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <h2>{notFoundResources.errorMessage}</h2>
      <img src={nobeerPicture} />
      <Link to={routes.main} className="homepage-link">
        {notFoundResources.homeLink}
      </Link>
    </section>
  );
};

export default NotFound;
