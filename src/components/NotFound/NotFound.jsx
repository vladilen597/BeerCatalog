import React from "react";
import { Link } from "react-router-dom";
import { nobeerPicture } from "../../constants/resourses/pictures/picturesImport.jsx";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <h2>Woops, 404!</h2>
      <img src={nobeerPicture} />
      <Link to="/" className="homepage-link">
        RETURN TO HOMEPAGE
      </Link>
    </section>
  );
};

export default NotFound;
