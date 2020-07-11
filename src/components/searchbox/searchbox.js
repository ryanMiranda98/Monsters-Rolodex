import React from "react";
import "./searchbox.styles.css";

export const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
