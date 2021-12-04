import React from "react";
import "./css/style.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div className="topnav">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/add">Add</Link>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Navigation;
