import React from "react";
import "./FindField.css";

const FindField = () => {
  return (
    <div className="find-beers-container">
      <input
        className="find-beers-input"
        type="text"
        placeholder="Search beers..."
      />
      <button className="find-beers-button">find</button>
    </div>
  );
};

export default FindField;
